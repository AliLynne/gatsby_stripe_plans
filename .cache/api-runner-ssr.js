var plugins = [{
      plugin: require('/Users/ali/Documents/practice/gatsby_playground/node_modules/gatsby-plugin-stripe/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ali/Documents/practice/gatsby_playground/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"defaultLayouts":{"default":"/Users/ali/Documents/practice/gatsby_playground/src/components/default-page-layout.js"}},
    },{
      plugin: require('/Users/ali/Documents/practice/gatsby_playground/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gatsby Stripe Plans","short_name":"StripePlan","start_url":"/","background_color":"#fff","theme_color":"#752f47","display":"standalone","icon":"static/favicon.svg"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
