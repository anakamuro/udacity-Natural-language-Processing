const HtmlWebPackPlugin = require("html-webpack-plugin");

 module.exports = {
     module = {
         rules: [
             {
                 test: /\.html$/,
                 use: [
                     {
                         loader: "html-loader",
                         options: {minimize: true}
                     }
                 ]
             },
         ]
     },
     plugin: [
         new HTMLWebPackPlugin({
             template: "./src/index.html",
             filename: "./index.html"
         }),
     ]
 }