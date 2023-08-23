const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                // type: 'asset/resource',
                use: ['file-loader']
            }
        ]
    },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
    },
    devServer: {
        static: './deploy',
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: "Webpack Output"
        }),
    ],
};