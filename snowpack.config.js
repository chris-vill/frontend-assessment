module.exports = {
  mount: {
    'src': '/'
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        "input": ['.js']
      }
    ],
    '@snowpack/plugin-sass'
  ],
  packageOptions: {
    knownEntrypoints: [
      "react/jsx-runtime",
      "core-js/modules/es.object.define-property.js",
      "core-js/modules/es.object.keys.js",
      "core-js/modules/es.symbol.js",
      "core-js/modules/es.array.filter.js",
      "core-js/modules/es.object.get-own-property-descriptor.js",
      "core-js/modules/es.array.for-each.js",
      "core-js/modules/web.dom-collections.for-each.js",
      "core-js/modules/es.object.get-own-property-descriptors.js",
      "core-js/modules/es.object.define-properties.js",
      "core-js/modules/es.array.map.js",
      "core-js/modules/es.symbol.description.js"
    ]
  },
  routes: [
    {
      match: 'all',
      src: '/api/.*',
      dest: (req, res) => proxy.web(req, res)
    },
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    },
  ],
  alias: {
    "@styles": "./src/styles",
    "@components": "./src/components",
    "@pages": "./src/pages",
    "@assets": "./src/assets",
    "@core": "./src/core"
  }
}