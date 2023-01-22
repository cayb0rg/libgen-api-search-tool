const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*'},
        https: false,
        port: 3000,
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
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
                test: /(\.s?css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}