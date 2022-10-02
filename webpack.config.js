const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:'./src/js/index.js',
  output: {
    publicPath:'',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  target: 'web',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    //compress: true,
    port: 1111,

    devMiddleware: {
      writeToDisk: true,
    },
    hot: false,
    liveReload: true,
    open: true,
  
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          {// Creates `style` nodes from JS strings
          loader : MiniCssExtractPlugin.loader,
          options:{
            publicPath:'../'
          },
        },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      template :'./src/index.html',
      filename:'index.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/projects.html',
      filename:'projects.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/project-details.html',
      filename:'project-details.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/blog.html',
      filename:'blog.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/blog-details.html',
      filename:'blog-details.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/add-blog.html',
      filename:'add-blog.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/about.html',
      filename:'about.html',
    }),
    new HtmlWebpackPlugin({
      template :'./src/contact.html',
      filename:'contact.html',
    }),
    new MiniCssExtractPlugin(),

  ],
};