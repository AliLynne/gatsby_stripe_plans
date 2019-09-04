module.exports = {
  plugins: [
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