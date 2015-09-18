var webpack = require("webpack");
var path = require("path");

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
      'webpack/hot/dev-server', // "only" prevents reload on syntax errors
      './public/jsx/main.jsx' // Your appʼs entry point
    ],
    output: {
        path: path.resolve(__dirname,'/public/js/build/'),
        publicPath: 'http://localhost:3000/js/build/',
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.jsx$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loaders: ['react-hot', 'babel']
        }]
    },

    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [
        definePlugin,
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

}
