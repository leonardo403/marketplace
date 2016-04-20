'use strict';

module.exports = function(grunt) {
  
  var  gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),
    
    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main-min.js': ['assets/js/main.js']
        }
      }
    }, // uglify
    cssmin: {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    }, 
    target: {
      files: {
        'assets/css/prod/main-min.css': ['assets/css/dev/main.css']
      }
    }
  },  //cssmin  
  cssnext: {
    options: {
      sourcemap: true,

      processors: [
        require('autoprefixer')({browsers: ['last 2 versions'] }), //add vendor prefixes
        require('postcss-nesting')({})
      ]
    },
    dist: {
      files: {
        "assets/css/dev/main.css": "assets/css/dev/style.css"
      }
    }
  }, //cssnext
  // postcss: {
  //       options: {
  //           use: [
  //               require('postcss-nesting')({})
  //           ]
  //       },
  //       dist: {
  //           src: 'assets/css/dev/style.css'
  //       }
  //   }, //postcss
     watch: {
       dist : {
        files : [
          'assets/js/**/*',
          'assets/css/dev/*'
        ],
        tasks : [ 'uglify', 'cssnext','postcss']
      }       
    } // watch    
  };

  //Load project config
  grunt.initConfig(gruntConfig);

  // Load the plugins 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-cssnext');
  grunt.loadNpmTasks('grunt-contrib-cssmin');      
  grunt.loadNpmTasks('grunt-postcss');

  // run tasks Default
  grunt.registerTask('default', ['uglify','cssnext','postcss']);
  
  //run task cssmin Production 
  grunt.registerTask('cssmin', ['cssmin']);

  //run watch
  grunt.registerTask('w',['watch']);
};