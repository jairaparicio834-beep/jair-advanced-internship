import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { adminDb } from '@/app/firebase/firebaseAdmin' 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
     console.log('🔥 Webhook hit!')
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Webhook signature failed:', err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

 if (event.type === 'checkout.session.completed' || event.type === 'invoice.paid') {
    let uid: string | undefined
    let plan: string | undefined

    console.log('🔔 Event type:', event.type)

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session
        uid = session.metadata?.uid
        plan = session.metadata?.plan
    } else if (event.type === 'invoice.paid') {
        const invoice = event.data.object as any
        const subscriptionId = invoice.subscription as string
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)
        uid = subscription.metadata?.uid
        plan = subscription.metadata?.plan
    }

    if (uid && plan) {
        await adminDb.collection('users').doc(uid).set({
            subscriptionStatus: plan,
            isSubscribed: true,
        }, { merge: true })
    } else {
      
    }
}
  return NextResponse.json({ received: true })
}