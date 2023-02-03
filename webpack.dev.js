const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
      filename: 'js/[name].bundle.[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 4600,
        open: {
            app: {
              name: 'chrome',
            },
          },
        hot: true,
        compress: true,
        historyApiFallback: true,
        watchFiles: ["src/**/*"]
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
          },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          chunks: ['index']
      }),
      new HtmlWebpackPlugin({
          filename: 'admin.html',
          template: './src/admin.html',
          chunks: ['admin']
      })
    ]
});