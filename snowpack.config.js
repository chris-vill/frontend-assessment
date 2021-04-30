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
      "react/jsx-runtime"
    ]
  },
  routes: [
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