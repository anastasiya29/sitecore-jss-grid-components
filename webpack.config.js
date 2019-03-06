var path = require('path');
const env = require('@babel/preset-env');
const reactApp = require('babel-preset-react-app');

module.exports = {
    mode: 'production',
    entry: './src/components.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'components.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [env, reactApp],
                    },
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};