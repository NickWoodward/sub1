const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/controllers/indexController.js',
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
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: './src/admin.html',
            chunks: ['admin']
        })
    ]
}