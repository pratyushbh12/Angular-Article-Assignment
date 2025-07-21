const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@controllers': path.resolve(__dirname, 'src/controllers/'),
            '@module': path.resolve(__dirname, 'src/module'),
            '@router': path.resolve(__dirname, 'src/router/'),
            '@services': path.resolve(__dirname, 'src/services/'),
            '@template': path.resolve(__dirname, 'src/template/'),
            '@translations': path.resolve(__dirname, 'src/translations/'),
            '@styles': path.resolve(__dirname, 'src/stylesheets/'),
        },
    },
};
