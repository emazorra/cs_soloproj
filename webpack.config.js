const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
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
    plugins: [new HtmlWebpackPlugin({
    title: 'development',
    template: 'client/index.html'
})],
devServer: {
    static: {
        directory: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    compress: true,
    proxy: {
        '/': 'http://localhost:3000'
    },
    port: 8080,
}
};