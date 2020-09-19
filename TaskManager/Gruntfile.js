module.exports = function(grunt){
    /*
    grunt.registerTask('task1', function(){
        console.log('Task 1 Executing!');
    });

    grunt.registerTask('task2', function(){
        console.log('Task 2 Executing!');
    });

    grunt.registerTask('bothtasks', ['task1', 'task2']);
    grunt.registerTask('default', ['task1', 'task2']);
    */
    grunt.initConfig({ //configure grunt API
        concat:{  //task name
            js: {  //create distributable
                src: ['js/one.js', 'js/two.js'],
                dest: 'build/scripts.js', //concatenate the above files and save into this destination
            },

            css: { 
                src: ['css/one.css', 'css/two.css'],
                dest: 'build/styles.css', //concatenate the above files and save into this destination

            }
        },
        watch:{
            js:{
                files:['js/**/*.js'],
                tasks:['concat:js']
            },
            css:{
                files:['css/**/*.css'],
                tasks:['concat:css']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat'); // load system defined node package installed 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);
}