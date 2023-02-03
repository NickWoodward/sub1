const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/controllers/indexController.js',
        admin: './src/js/controllers/adminController.js'
    },
    output: {
        filename: 'js/[name].bundle.[chunkhash].js',
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
                    filename: 'images/[hash][ext][query]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'html/index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'html/admin.html',
            template: './src/admin.html',
            chunks: ['admin']
        })
    ]
}