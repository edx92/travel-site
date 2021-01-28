const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    // setup for dev server with auto refresh for html changes and hot modules for css & js
    // also adding support for network connected device testing
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    // Below required if not using webpack-dev-server
    // watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader',
                    'css-loader?url=false',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: postCSSPlugins
                            }
                        }
                    }

                ]
            }
        ]
    }
}