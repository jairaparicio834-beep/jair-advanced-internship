import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  try {
   const { priceId, uid, plan } = await req.json()
  console.log('Checkout hit:', { priceId, uid, plan })

 const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { uid, plan },
    subscription_data: {
        metadata: { uid, plan }, // ← add this
    },
    success_url: `${process.env.NEXT_PUBLIC_URL}/settings`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/plans`,
})

  console.log('Success URL:', session.success_url)
  return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('FULL STRIPE ERROR:', err)
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}