const unminifiedWebpackPlugin = require('unminified-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _package = require('./package');

function dashToCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/^(.)/, function (g) {return g.toUpperCase(); })
        .replace(/-([a-z])/g, function (g) {return g[1].toUpperCase(); });
}

const libraryName = dashToCamelCase(_package.name);

module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.min.js',
        library: libraryName,
        umdNamedDefine: true,
        libraryTarget: 'umd'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: true,
                comments: false,
                compress: {
                    warnings: false,
                    drop_console: true
                }, include: /\.min\.js$/
            }
        }),
        new WebpackAutoInject({
            PACKAGE_JSON_PATH: './package.json',
            SHORT: libraryName,
            components: {
                InjectAsComment: true,
                InjectByTag: true
            },
            componentsOptions: {
                InjectAsComment: {
                    tag: 'Build version: {version}'
                }
            }
        }),
        new unminifiedWebpackPlugin()
    ]
};