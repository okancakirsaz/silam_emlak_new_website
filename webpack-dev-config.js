const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/",
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
      historyApiFallback: true
    },
  plugins: [
     new HtmlWebpackPlugin({
       template:"./src/views/main_page/main_page.html"
     }),
     new HtmlWebpackPlugin({
      filename:"/iletisim.html",
      template:"./src/views/contact/contact.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/konumumuz.html",
      template:"./src/views/our_location/our_location.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/hakkimizda.html",
      template:"./src/views/about_us/about_us.html"
    }),
    
    new HtmlWebpackPlugin({
      filename:"/gizlilik-politikasi.html",
      template:"./src/views/privacy_policy/privacy_policy.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/gayrimenkul-danismanlik.html",
      template:"./src/views/property_consulment/property_consulment.html"
    }),

    new HtmlWebpackPlugin({
      filename:"/ilanlar.html",
      template:"./src/views/articles/articles.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/ilan.html",
      template:"./src/views/opened_article/opened_article.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/hesaplama.html",
      template:"./src/views/calculator/calculator.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/panel.html",
      template:"./src/views/panel_login/panel_login.html"
    }),
    new HtmlWebpackPlugin({
      filename:"/silam-emlak-admin.html",
      template:"./src/views/panel/panel.html"
    }),
    new NodePolyfillPlugin()
  ]
};
