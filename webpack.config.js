const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          { loader: 'postcss-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve('./node_modules/'),
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 10088,
  },
}
