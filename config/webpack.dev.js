const webpack = require('webpack')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'subscriptions',
      filename: 'remoteEntry.js',
      exposes: {
        './SubscriptionsApp': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
  ]
};

module.exports = merge(commonConfig, devConfig);
