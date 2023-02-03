const { merge } = require('webpack-merge');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '../express-app/public/js/[name].bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
            test:/\.css$/i,
            use:  ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.js$/i,
            use: ['babel-loader'],
            exclude: /node_modules/,
         },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
            generator: {
              filename: '../express-app/public/images/[hash][ext][query]'
            }
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: '../express-app/public/html/index.html',
        template: './src/index.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        filename: '../express-app/public/html/admin.html',
        template: './src/admin.html',
        chunks: ['admin']
    })
  ]
});