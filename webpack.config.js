const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");


const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${SRC_DIR}/app/index.js`,
  // mode: 'development',
  output: {
    path: `${DIST_DIR}/app`,
    filename: '[name].[hash].js',
    publicPath: 'app'
  },
  target: "node",
  externals: [nodeExternals()],
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
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Starter',
      inject: false,
      hash: true,
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: `${DIST_DIR}/style.[contenthash].css`
    })
  ]
}