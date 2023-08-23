const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { resolve } = require('path');

module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/public',
    },
    devServer: {        
        static: './public',
        port: 9000,
        open: true,
        hot: true,
        liveReload: true,       
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    mode: 'development'
};