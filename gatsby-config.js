module.exports = {
  siteMetadata: {
    siteUrl: "https://localhost:8000",
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
          },
          {
            "label": "$10 per month",
            "id": "plan_Fm5wMfZtIDXCof"
          }
        ],
      button_text: "Give Me Money",
      success_page: "success",
      cancel_page: "cancel"
    }
  },
  plugins: [
    `gatsby-plugin-stripe`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path:`${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.js")
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Stripe Plans`,
        short_name: `StripePlan`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#752f47`,
        display: `standalone`,
        icon: `static/favicon.svg`
      }
    }
  ]
}