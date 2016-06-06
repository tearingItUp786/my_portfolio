module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jekyll: {
            build: {
                dest: '_site'
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': '_sass/main.sass'
                }
            }
        },

        watch: {
            sass: {
                files: ['_sass/**/*.sass', '_sass/**/*.scss'],
                tasks: ['sass']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*.html', 'css/*', 'js/*.js', 'index.html', ],
                tasks: ['jekyll']
            }
        },

        browserSync: {
            files: {
                src: ['_site/css/*.css', '_site/*.html']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                },
                port: 3000
            }
        },
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    newFilesOnly: false,
                    sizes: [{
                        namge: "large",
                        width: '300px',
                        height: '300px',
                        aspectRatio: false
                    }],
                    quality: 100
                },
                files: [{
                    // expand: true,
                    // src: ['**.{JPG,gif,png,jpg}'],
                    // cwd: 'images/originals/',
                    // dest: 'images/backgrounds/'
                    expand: true,
                    src: ['business-1-try.jpg'],
                    cwd: 'images/backgrounds/',
                    dest: 'images/backgrounds/'
                }]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/main.min.css': ['css/main.css'],
                }
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'js/sourcemap.map'
                },
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
    grunt.registerTask('resize', ['responsive_images']);
    grunt.registerTask('min', ['cssmin', 'uglify']);
};
