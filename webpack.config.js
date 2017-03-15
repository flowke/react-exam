const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: '[name]_[contenthash].css',
    disable: true
});
const extractSCSS = new ExtractTextPlugin({
    filename: '[name]_[contenthash].css',
    disable: true
});


const webpack = require('webpack');

module.exports = {
    entry : [
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, 'build/assets'),
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
                use: [ 'react-hot-loader' , 'babel-loader'],
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']

                })
            },
            {
                test: /\.scss$/,
                use: extractSCSS.extract({
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
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }
        ]
    },
    plugins: [
        extractCSS,
        extractSCSS,
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
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        port: 8000,
        publicPath: '/assets/',
        inline: true,
        noInfo: false,
        // progress: true,
        historyApiFallback: true,
    }
}
