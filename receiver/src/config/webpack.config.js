const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: path.resolve('src', 'app', 'main'),
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('public', 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({filename: 'vendor.js', name: 'vendor'})
    ],
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader', query: {
                presets: ['latest', 'stage-0', 'react']
            }, exclude: /node_modules/},
            {test: /\.js$/, loader: 'source-map-loader', enforce: 'pre', exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map'
}