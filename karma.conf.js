// Karma configuration
// Generated on Wed Jan 20 2016 18:41:34 GMT-0800 (PST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jspm'],

    // List of plugins to use
    // Or manually push them to plugins array after config is set (See end of file)
    //plugins: ['karma-jasmine', 'karma-chrome-launcher'],


    // karma-jspm plugin configuration
    jspm: {
      loadFiles: [
        'jspm_packages/npm/zone.js@0.5.10/lib/zone.js', // Not: ./jspm_packages/npm/zone.js@0.5.10/dist/zone.js
        'jspm_packages/npm/reflect-metadata@0.1.3/Reflect.js',
        'jspm_packages/npm/jquery@2.2.0/dist/jquery.min.js',
        'jspm_packages/github/velesin/jasmine-jquery@2.1.1.js',
        //FIXME: Need to fix app.component test. Research how to load canvas into dom before component loads
        //'app/app.component.js',
        //'app/app.component.test.js',
        'app/utils/utils.js',
        'app/utils/utils.test.js',
        'app/turtle/turtle.js',
        'app/turtle/turtle.test.js',
        'app/turtle/movement/movement.js',
        'app/turtle/movement/movement.test.js'
      ]
    },


    // list of files / patterns to load in the browser
    files: [],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });

  // Push the plugin so we don't have to list out all other plugins
  config.plugins.push(require('./node_modules/karma-jspm'));

};
