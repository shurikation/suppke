const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill','./index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    }),
  ],
  context: path.resolve(__dirname, 'src/bundle'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
};