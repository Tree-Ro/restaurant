const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map', // Corrected 'devtools' to 'devtool'
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
