const webpack = require('webpack');

const config = {
    devtool : "inline-source-map",
    entry: [__dirname + "/app/app.js", 
            __dirname + "/app/header.js",
            __dirname + "/app/section.js",
            __dirname + "/app/card.js"],
    output: {
        path: "./public/js/",
        publicPath: "/js/",
        filename: "bundle.js"
    },
    module: {
        loaders :[{
            test :  /\.jsx?$/,
            exclude : /node_modules/,
            loader: ["babel"],
            query: {
                presets:["es2015","react","stage-0"]
            }
        }]
    },
    devserver :{
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    },
}
    if (process.env.NODE_ENV === 'production'){
        config.devtool = false;
        config.plugins = [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({comments: false}),
            new webpack.DefinePlugin({
                'process.env':{NODE_ENV: JSON.stringify('production')}
            })
        ];
    };

    module.exports = config;
