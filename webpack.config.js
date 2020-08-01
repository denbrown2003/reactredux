const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
var path = require('path');
const csp = require('express-csp-header');

__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';

module.exports = {
    entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader',],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader',],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader',],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      
    ]
  },
  devServer: {
    compress: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    publicPath: '/',
    //noInfo: true,
    stats: 'errors-only', 
    historyApiFallback: true,  
    overlay: {
      warnings: true,
      errors: true
    },
    proxy : {
        '/api/**' : {
            target: `http://localhost:5000/`,
            secure: false,
            changeOrigin: true,
        }
    }
  },

  
  devtool: false,
  plugins: [
    new HtmlWebPackPlugin({ 
      template: "./public/index.html", 
      filename: 'index.html',
      favicon: "./public/favicon.ico" 
    }),
    new webpack.EvalSourceMapDevToolPlugin({})
  ]
};