let webpack = require('webpack'),
    path = require('path');

let config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: '80'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf|png)$/,
                loader: 'url'
            }
        ]
    }
};

module.exports = config;
