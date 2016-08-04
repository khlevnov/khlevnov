const webpack = require('webpack');

module.exports = {
    context: require('path').join(__dirname, 'frontend'),
    entry: {
        app: './js/app',
    },
    output: {
        path: __dirname + '/build/js',
        publicPath: '/js/',
        filename: '[name].js'
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
