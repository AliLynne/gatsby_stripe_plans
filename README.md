### Gatsby Stripe Plans Starter

This gatsby starter was made by [AliLynne](https://www.alilynne.com).

Audience: People who need a simple website to set up recuring payments.

How to use:

  - Follow the instructions for creating a [Client-Only Integration for a simple subscription](https://stripe.com/docs/payments/checkout/subscriptions/starting#client-only)


Things you'll need:

- Your Stripe Public Key (NOT your secret key)
- List of plan id's
- What you want your button to say

In the `gatsby-config.js` file you'll need to change the public key, the plan list, and the button text.

In the `src/pages/index.mdx` file you can put the text of the README for your project, or any other text you'd like using [Markdown Syntax](https://www.markdownguide.org/basic-syntax/). 


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