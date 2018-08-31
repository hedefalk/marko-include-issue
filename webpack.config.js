const path = require('path')

module.exports = {
  entry: "./client.js",
  output: {
    path: __dirname,
    filename: "static/bundle.js"
  },
  resolve: {
    extensions: [".js", ".marko"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "marko-loader"
      }
    ]
  },
  serve: {
    content: [
      path.resolve(__dirname, "."),
      path.resolve(__dirname, "static")
    ],
    port: 8888,
    hotClient: {
      allEntries: true
    }
  }
}
