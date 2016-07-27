module.exports = {
    entry: './frontend/js/index.js',
    output: {
        path: './build/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
