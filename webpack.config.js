const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Development',
        template: './client/index.html'
    }),
        new NodePolyfillPlugin()
],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/'
        },
        // compress: true,
        // proxy: [
        //     {
        //         context: ['/'],
        //         target: 'http://localhost:3000'
        //     }
        // ],
        port: 8080,
        // resolve: {
        //     fallback: {
        //         util: require.resolve("util/"),
        //         crypto: require.resolve("crypto-browserify"),
        //     }
        // }
    }
    
};