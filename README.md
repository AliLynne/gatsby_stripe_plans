### Gatsby Stripe Plans Starter

This gatsby starter was made by [AliLynne](https://www.alilynne.com).

Audience: People who need a simple website to set up recuring payments.

How to use:

  - Follow the instructions for creating a [Client-Only Integration for a simple subscription](https://stripe.com/docs/payments/checkout/subscriptions/starting#client-only)



```javascript
module.exports = {
  siteMetadata: {
    stripe: {
      public_key: 'pk_test_7VgySoAHHC9xMs1cs64IeVcs00FdAcd5fF',
      plans: 
        [
          {
            "label": "$1 per month",
            "id": "plan_FlfqFy4W1PlixB"
          },
          {
            "label": "$5 per month",
            "id": "plan_FlfozYjwgbihrp"
          }
        ],
      button_text: "Give Me Money"
    }
  },
```