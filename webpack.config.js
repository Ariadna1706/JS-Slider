const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "script.min.js",
  },

  devtool: "source-map",

  devServer: {
    static: "./",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
      filename: "index.html",
    }),
  ],
};
