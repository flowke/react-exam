const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry : [
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'app.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                root: '.',
                                modules: true,
                                localIdentName: '[local]_[hash:base64:10]',
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'compressed'
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/component'),
            path.resolve(__dirname, 'src/common')
        ],
        extensions: ['.js']
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        port: 8000,
        publicPath: '/assets/',
        inline: true,
        noInfo: false,
        // progress: true,
        historyApiFallback: true,
    }
}
