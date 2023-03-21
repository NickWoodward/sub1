const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        index: './src/js/controllers/indexController.js',
        admin: './src/js/controllers/adminController.js'
    },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
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
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: 'src/admin.html',
            chunks: ['admin']
        }),
        new WebpackBundleAnalyzer()
    ]
}