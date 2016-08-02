const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry: './js/app',

    output: {
        path: __dirname + '/build',
        publicPath: '/js/',
        filename: 'app.js'
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/frontend',
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
