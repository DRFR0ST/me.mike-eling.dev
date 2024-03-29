const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/mnt/c/Users/mikee/Documents/GitHub/me.mike-eling.dev/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/c/Users/mikee/Documents/GitHub/me.mike-eling.dev/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/c/Users/mikee/Documents/GitHub/me.mike-eling.dev/src/pages/index.js")))
}

