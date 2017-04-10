import webpack from 'webpack';
import path from 'path';

global.appRoot = path.resolve(__dirname);

const config = {
  entry: {
    app: './Resources/Js/App.js',
    vendor: ['vue', 'vuex', 'lodash']
  },

  output: {
    path: path.resolve(__dirname, 'wwwroot/js'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname, 'wwwroot/js')
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ]
};

if (process.env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourcemap: true,
      compress: {
        warnings: false
      }
    })  
  );

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  );
}

export default config;
