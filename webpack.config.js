//require our dependencies
// run this: ./node_modules/.bin/webpack --config webpack.config.js
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: {
      main: './static/assets/js/index',
      application: './static/assets/js/components/Application',
      map: './static/assets/js/components/Map',
      locations: './static/assets/js/reducers/locations',
    },

    output: {
        path: path.resolve('./static/assets/bundles/'),
        filename: '[name]-[hash].js',
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [
            {test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },

    resolve: {
        extensions: [' ', '.js', '.jsx']
    }
}
