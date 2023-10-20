const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
  },
  devtool: 'inline-source-map',
  mode:"development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },

      {
        test: /\.html$/,
        use: ['html-loader']
      },
    ]
  },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      hot: true,
    },
  plugins: [
     new HtmlWebpackPlugin({
       template:"./src/views/main_page/main_page.html",
     }),
    
    new NodePolyfillPlugin()
  ]
};
