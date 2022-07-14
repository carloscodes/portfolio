import { loadStripe, Stripe } from "@stripe/stripe-js";


export async function checkout( {lineItem}: any ){
    console.log('checkout')
    let stripePromise: Promise<Stripe | null> | null = null;

    const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
        }
    
        return stripePromise;
    }

    const stripe = await getStripe();

    await stripe!.redirectToCheckout({
        mode: 'payment',
        lineItems: lineItem,
        successUrl: 'https://carloschavarria.vercel.app/shop/success',
        cancelUrl: 'https://carloschavarria.vercel.app/shop',
    })
}

