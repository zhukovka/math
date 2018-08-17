const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        main: './index.js',
        flash: './js/flash.js',
        cards: './js/cards.js',
        quiz: './js/quiz.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js/')
    }
};