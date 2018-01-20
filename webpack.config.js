const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './client/src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'dist.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: 'babel-loader',
            }
        ]
    },
    watch: true,
}

module.exports = config;