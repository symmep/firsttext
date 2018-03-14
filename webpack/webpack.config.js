const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UgfilyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry:{
        entry:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
            test: /\.css$/,
            // use: ['style-loader','css-loader']
            use: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use: "css-loader"
            })
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 30000,
                            outputPath:'img/'
                        }
                    }
                ]
            }
        ]

    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        }),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        }),
        new ExtractTextPlugin('css/index.css'),
        // new UgfilyJsPlugin
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:"127.0.0.1",
        port:"8081",
        compress:true
    }
};