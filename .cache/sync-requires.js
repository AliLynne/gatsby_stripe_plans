const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ali/Documents/practice/gatsby_playground/.cache/dev-404-page.js"))),
  "component---src-pages-cancelled-js": hot(preferDefault(require("/Users/ali/Documents/practice/gatsby_playground/src/pages/cancelled.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ali/Documents/practice/gatsby_playground/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/ali/Documents/practice/gatsby_playground/src/pages/success.js")))
}

