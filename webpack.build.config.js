// Webpack obtenido del repositorio de nkholski - https://github.com/nkholski
'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    watch: false,
    context: `${__dirname}/src/`,
    entry: {
        Phaser3Swipe: './main.js',
        'Phaser3Swipe.min': './main.js'
    },
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'dev'),
        path: `${__dirname}/dist/`,
        library: '[name]',
        libraryTarget: 'umd',
        filename: '[name].js'
    },

    plugins: [
        new UglifyJSPlugin({
            include: /\.min\.js$/,
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                compress: true,
                ie8: false,
                ecma: 6,
                output: {
                    comments: false
                },
                warnings: true
            },
        })

    ],

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }]
    },
    optimization: {
        minimize: false
    }
};