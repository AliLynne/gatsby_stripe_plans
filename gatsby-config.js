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
  plugins: [
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Playground Starter`,
        short_name: `GatsbyPlayground`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#752f47`,
        display: `standalone`,
        icon: `static/favicon.svg`
      }
    }
  ]
}