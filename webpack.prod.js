const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            //Simulate the removal of files
            dry: true,
            //Write logs to console
            verbose: true,
            //Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackassets: true, 
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),

    ]
}