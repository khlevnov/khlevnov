const webpack = require('webpack');

module.exports = {
    output: {
        publicPath: '/js/'
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
