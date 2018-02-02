const path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.min.js'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};