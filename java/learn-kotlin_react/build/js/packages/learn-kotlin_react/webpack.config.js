let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\js\\packages\\learn-kotlin_react\\kotlin\\learn-kotlin_react.js"]
};

config.output = {
    path: "C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "learn-kotlin_react.js"
            : "learn-kotlin_react-[name].js";
    },
    library: "learn-kotlin_react",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "open": true,
  "static": [
    "C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\processedResources\\js\\main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("C:\\Users\\user\\Desktop\\bssm\\github_learn\\TIL\\java\\learn-kotlin_react\\build\\reports\\webpack\\learn-kotlin_react\\webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
