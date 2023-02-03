const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    
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
    
});