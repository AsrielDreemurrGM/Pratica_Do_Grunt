module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            }
        }
    })


grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('default', ['less']);
}

