const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
   entry: APP_DIR + '/index.jsx',
   output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         {
            test: /\.(js|jsx)$/,
            include: APP_DIR,
            loader: 'babel-loader'
         },
         {
            test: /\.json$/,
            loader: 'json-loader'
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: [
                  {
                     loader: 'css-loader',
                     options: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                     }
                  },
                  'postcss-loader'
               ]
            })
         }
      ]
   },
   plugins: [
              new ExtractTextPlugin("style.css")
   ]
};

module.exports = config;
