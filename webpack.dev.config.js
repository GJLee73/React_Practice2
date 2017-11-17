var webpack = require('webpack');

module.exports = {

    entry: [
        './src/index.js',
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'react-hot-loader/patch'
    ],

    output: {
        path: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};