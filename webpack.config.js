const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const TerserJSPlugin = require('terser-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default

module.exports = {
  entry: {
    app: './build.js'
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: './',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['@babel/preset-env']
      //       }
      //     },
      //     'eslint-loader'
      //   ]
      // },
      // {
      //   test: /\.(ttf|woff)/,
      //   loader: 'file-loader'
      // },
      {
        test: /\.(png|jpe?g|svg|webp|bmp)/,
        loader: 'url-loader',
        options: {
          limit: 30000
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        // removeComments: true,
        // removeRedundantAttributes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // useShortDoctype: true,
        conservativeCollapse: true,
        collapseWhitespace: true
      }
    }),
    new HTMLInlineCSSWebpackPlugin({
      leaveCSSFile: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  }
}
