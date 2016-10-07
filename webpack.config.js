var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  
  //说明：按需要清除注释，应在Chrome浏览器环境下使用
  //devtool: 'eval-source-map',
  
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
	proxy: {
        '/api/*': {
            target: 'http://localhost:8081',
            secure: false
        }
    }
  },
  
  module: {
    loaders: [
	  {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015', 'react']
        }
      },
	  {
		test: require.resolve('jquery'),
		loader: 'expose?$!expose?jQuery'
	  }
    ]
  },
  
  resolve: {
      extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'Ajax测试'
    }),
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'window.$': 'jquery',
		React: 'react',
		ReactDOM: 'react-dom'
	})
  ]
};