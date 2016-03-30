var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].js"
    },
    debug: true,
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src/js'),
                loader: 'react-hot!babel'
            }
        ]
    }
};