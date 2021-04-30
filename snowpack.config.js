module.exports = {
  mount: {
    'src': '/'
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        "input": ['.js', '.mjs', '.jsx', '.ts', '.tsx']
      }
    ],
    '@snowpack/plugin-sass'
  ],
  packageOptions: {
    knownEntrypoints: [
      "react/jsx-runtime"
    ]
  },
  alias: {
    "@styles": "./src/styles",
    "@components": "./src/components",
    "@assets": "./src/assets",
    "@core": "./src/core"
  }
}