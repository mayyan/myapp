const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        gallery: ['./src/javascripts/gallery.js', 'webpack-hot-middleware/client'],
        upload: ['./src/javascripts/upload.js', 'webpack-hot-middleware/client']
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist/javascripts')
    },
    externals: {
        jQuery: 'jQuery',
        // Masonry: 'Masonry',
        // imagesLoaded: 'imagesLoaded'
    },
    plugins: [
        // OccurenceOrderPlugin is needed for webpack 1.x only
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, './src', 'javascripts'),
            ],
            use: ['babel-loader']
        }]
    }
};