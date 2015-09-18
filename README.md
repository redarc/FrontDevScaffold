# FrontDevScaffold
Front Web Page Development Environment like react + webpack + react-hot-loader + webpack-dev-server

# 2015/09/18
Fix https://github.com/webpack/webpack-dev-server/issues/174
1.该问题由Windows Path路径导致,使用path.resolve更换所有路径。
2.js和jsx所需的loader bable和react-hot使用的include 和 exclue都需要更改。
例如
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loader: 'babel-loader',
        },
        {
            test: /\.jsx$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loaders: ['react-hot', 'babel']
        }]
    }
