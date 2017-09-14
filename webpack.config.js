const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        'vendor': ['babel-polyfill'],
        'fonts': ['webpack-material-design-icons'],
        'ui': ['angular-material'],
        'app': ['./src/index.js']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: '[name]-[hash].js',
        sourceMapFilename: '[name]-[hash].map'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                // options: {
                //     minimize: false,
                //     sourceMap: true
                // }
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(mp4|webm)$/,
            loader: 'url-loader?limit=10000'
        }]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, './src/index.html'),
        }),
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, './static')
        // }], {
        //     ignore: ['index.html', 'favicon.ico']
        // }),
    ]
};
