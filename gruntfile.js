module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['js/*.js']
    },

    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'style.css': 'style.sass'
  			}
  		}
  	},
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'sass']);

};