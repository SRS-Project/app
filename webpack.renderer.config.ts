import * as path from 'path'
import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

import baseConfig from './webpack.config.base'

const config = merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    app: './src/renderer.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'src', 'main.ts')],
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
})

export default config // tslint:disable-line
