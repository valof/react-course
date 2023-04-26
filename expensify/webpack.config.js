const path = require('path')
module.exports={
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]           
        }]
    },
    devtool: "source-map",
    devServer: {
        static: path.join(__dirname, 'public'),
        client: {
            overlay: {
              errors: true,
              warnings: false
            }
        },
        historyApiFallback: true
    }
};