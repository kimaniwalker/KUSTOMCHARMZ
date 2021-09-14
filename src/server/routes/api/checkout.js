import express from 'express';
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPESKLIVE);
const YOUR_DOMAIN = "https://www.kustomcharmz.com";
import { newOrder } from '../../utils/mail';


const router = express.Router();


router.post('/create-checkout-session', async (req, res) => {


  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      line_items:
        req.body.items
      ,
      metadata: {
        'custom_message': req.body.message,
        'shipping_total': req.body.shipping,
      },
      mode: 'payment',
      shipping_rates: [req.body.shipping_rate],
      shipping_address_collection: {
        allowed_countries: ['US', 'CA']
      },
      success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cart`,
    },
      {
        stripeAccount: 'acct_1JSByuLJedda0w0c',
      }
    );
    console.log(session)
    res.json(session.url)
  } catch (error) {
    console.log(error)
  }

});

router.post('/retrieve-checkout-session', async (req, res) => {

  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.body.session_id
    )
    console.log(session)
    res.json(session)
  } catch (error) {
    console.log(error)
  }



});



router.post('/webhook', async (req, res) => {


  const event = req.body;

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      console.log('Checkout Session Completed')

      const customerDetails = {
        "email": checkoutSession.customer_details.email,
        "total": checkoutSession.amount_total
      }



      console.log(customerDetails)
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment Intent Succeeded')
      const shipping = {
        "name": paymentIntent.shipping.name,
        "city": paymentIntent.shipping.address.city,
        "state": paymentIntent.shipping.address.state,
        "postal_code": paymentIntent.shipping.address.state,
        "address": paymentIntent.shipping.address.line1,
        "country": paymentIntent.shipping.address.country,
      }


      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_intent.created':
      const paymentIntentCreated = event.data.object;
      console.log('Payment Intent Created')

      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'charge.succeeded':
      const chargeSucceeded = event.data.object;
      console.log('Charge Completed')

      const receipt = {
        "receipt": chargeSucceeded.receipt_url,
        "amount": '$' + chargeSucceeded.amount / 100 + '.00'
      }
      const shippingInfo = {
        "name": chargeSucceeded.shipping.name,
        "email": chargeSucceeded.billing_details.email,
        "city": chargeSucceeded.shipping.address.city,
        "state": chargeSucceeded.shipping.address.state,
        "postal_code": chargeSucceeded.shipping.address.postal_code,
        "address": chargeSucceeded.shipping.address.line1,
        "country": chargeSucceeded.shipping.address.country,
      }

      const orderDetails = {
        receipt,
        shippingInfo
      }

      console.log(orderDetails)

      newOrder(orderDetails)
        .then((response) => {
          console.log(response);
        }).catch((err) => {
          console.log(err)
        });



      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    case 'customer.created':
      const customerCreated = event.data.object;
      console.log('Customer Completed')


      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
});

export default router;