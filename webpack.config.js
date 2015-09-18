var webpack = require("webpack");
var path = require("path");

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    context: __dirname + '/public/jsx',
    entry: [
        './main.jsx'
    ],
    output: {
        path: __dirname + '/public/js/build',
        publicPath: '/js/build',
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[chunkhash].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [
        definePlugin,
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
}
