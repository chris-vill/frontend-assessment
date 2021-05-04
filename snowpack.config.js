module.exports = {
  mount: {
    "src": "/"
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        "input": [".js"]
      }
    ],
    "@snowpack/plugin-sass"
  ],
  packageOptions: {
    knownEntrypoints: [
      "react/jsx-runtime",
      "core-js/modules/es.array.filter.js",
      "core-js/modules/es.array.for-each.js",
      "core-js/modules/es.array.from.js",
      "core-js/modules/es.array.is-array.js",
      "core-js/modules/es.array.iterator.js",
      "core-js/modules/es.array.map.js",
      "core-js/modules/es.array.slice.js",
      "core-js/modules/es.array.splice.js",
      "core-js/modules/es.function.name.js",
      "core-js/modules/es.object.define-property.js",
      "core-js/modules/es.object.get-own-property-descriptor.js",
      "core-js/modules/es.object.keys.js",
      "core-js/modules/es.object.get-own-property-descriptors.js",
      "core-js/modules/es.object.define-properties.js",
      "core-js/modules/es.object.to-string.js",
      "core-js/modules/es.regexp.exec.js",
      "core-js/modules/es.string.iterator.js",
      "core-js/modules/es.string.link.js",
      "core-js/modules/es.string.split.js",
      "core-js/modules/es.symbol.js",
      "core-js/modules/es.symbol.description.js",
      "core-js/modules/es.symbol.iterator.js",
      "core-js/modules/web.dom-collections.for-each.js",
      "core-js/modules/web.dom-collections.iterator.js"
    ]
  },
  routes: [
    {
      match: "all",
      src: "/api/.*",
      dest: (req, res) => proxy.web(req, res)
    },
    {
      match: "routes",
      src: ".*",
      dest: "/index.html"
    },
  ],
  alias: {
    "@assets": "./src/assets",
    "@components": "./src/components",
    "@core": "./src/core",
    "@hooks": "./src/hooks",
    "@pages": "./src/pages",
    "@styles": "./src/styles"
  }
}