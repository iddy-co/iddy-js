const path = require('path')

module.exports = {
    mode   : 'development',
    entry  : './index.ts',
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    output : {
        filename: 'iddy.js',
        path    : path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Iddy'
    },
    module : {
        rules: [{
            test   : /\.tsx?$/,
            loader    : 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.ts', '.js']
    },
    externals: {
    }
}