{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\js\\packages\\learn-kotlin_react\\kotlin\\learn-kotlin_react.js'
    ]
  },
  output: {
    path: 'C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\distributions',
    filename: [Function: filename],
    library: 'learn-kotlin_react',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      'C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\processedResources\\js\\main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}