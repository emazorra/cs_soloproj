const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
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
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
        ]
    },
    plugins: [new HtmlWebPackPlugin({
        title: 'Development',
        template: 'public/index.html'
        
    }),
    new NodePolyfillPlugin()
],
    devServer: {
        static: path.resolve(__dirname, 'build'),
        compress: true,
        proxy: [
        {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        },
    ],
        port: 8080,
    }
    
};