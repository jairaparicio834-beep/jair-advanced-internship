import { loadStripe } from '@stripe/stripe-js'
import { auth } from '@/firebase'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)


export const loadCheckout = async (priceId: string, plan: string) => {
  const stripe = await stripePromise
  if (!stripe) throw new Error('Stripe failed to initialize')

  const uid = auth.currentUser?.uid
  if (!uid) throw new Error('User not logged in')

  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, uid, plan }),  // send uid + plan
  })

  const data = await res.json()
  if (!data.url) throw new Error('No checkout URL returned')

  window.location.href = data.url
}