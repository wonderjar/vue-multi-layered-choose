const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const utils = require('./utils')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  output: {
    path: resolve('dist'),
  },
  module: {
    // rules: utils.styleLoaders({
    //   sourceMap: false,
    //   extract: true,
    //   usePostCSS: true
    // }),
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: resolve('.'),
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            extract: true
          })
        }
      },
      {
        test: /\.(ttf|eot|woff)$/,
        loader: "url-loader"
      }
      // {
      //   test: /\.css$/,
      //   loader: 'style!less!css'
      // },
      // {
      //   test: /\.s[a|c]ss$/,
      //   loader: 'style!css'
      // }
    ]
  },
  externals: {
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: resolve('/src/plugin.js'),
    output: {
      filename: 'vue-multi-layered-choose.min.js',
      libraryTarget: 'window',
      library: 'VueMultiLayeredChoose',
    }
  }),
  merge(config, {
    entry: resolve('/src/multi-layered-choose.vue'),
    output: {
      filename: 'vue-multi-layered-choose.js',
      libraryTarget: 'umd',
      library: 'vue-multi-layered-choose',
      umdNamedDefine: true
    }
  })
];
