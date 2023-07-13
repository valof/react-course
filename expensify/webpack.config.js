const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports= (env, argv) => {

    const isProduction = ( argv.mode === 'production');
    console.log(`Webpack mode is: ${argv.mode}`);
    console.log('Webpack env is', env);

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        mode: argv.mode,
        plugins: [new MiniCssExtractPlugin({filename: "styles.css"})],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            }]
        },
        devtool: isProduction? "source-map" : 'inline-source-map',
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
    }
};