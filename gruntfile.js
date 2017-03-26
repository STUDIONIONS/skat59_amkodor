module.exports = function(grunt){
	var gc = {
		imageNotyfy: __dirname+'\\notify.png',
		minifyHtml: true
	};
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : grunt.file.readJSON('package.json'),
		less: {
			css: {
				files : {
					'test/css/amkodor/main.css' : [
						'src/amkodor/css/main.less'
					]
				},
				options : {
					compress: true,
					ieCompat: false
				}
			}
		},
		autoprefixer:{
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox 16.0', 'Opera 12.1', "Chrome 26.0"],
				cascade: false
			},
			css: {
				expand: true,
				flatten: true,
				src: [
					'test/css/amkodor/main.css'
				],
				dest: 'dest/amkodor/assets/templates/leadingpage/css/'
			}
		},
		uglify : {
			options: {
				ASCIIOnly: true
			},
			main: {
				files: {
					'dest/amkodor/assets/templates/leadingpage/js/main.js': [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap/dist/bootstrap.js',
						'src/amkodor/js/main.js'
					]
				}
			}
		},
		imagemin: {
			base: {
				options: {
					optimizationLevel: 5,
					//progressive: true,
					//interlaced: true,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/amkodor/images/*.{png,jpg,gif,svg}'
						],
						dest: 'dest/amkodor/assets/templates/leadingpage/images/',
						filter: 'isFile'
					}
				]
			},
			css: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/amkodor/images/css/*.{png,jpg,gif,svg}'
						],
						dest: 'src/amkodor/images/bin/',
						filter: 'isFile'
					}
				]
			}
		},
		jade: {
			amkodor: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: {
					"test/amkodor/index.php": [
						"src/amkodor/html/amkodor/index.jade"
					]
				}
			}
		},
		concat: {
			options: {
				separator: '',
			},
			amkodor: {
				src: [
					'src/amkodor/php/send.php',
					'test/amkodor/index.php'
				],
				dest: 'dest/amkodor/index.php',
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: [
					'src/amkodor/html/**/*.jade',
					'src/amkodor/php/**/*.php'
				],
				tasks: ['notify:watch',"jade","concat","notify:done"]
			},
			js: {
				files: [
					'src/amkodor/js/**/*.js'
				],
				tasks: ['notify:watch', 'uglify','notify:done']
			},
			css: {
				files: [
					'src/amkodor/css/**/*.{css,less}',
				],
				tasks: ['notify:watch', 'less', 'autoprefixer','notify:done']
			},
			images: {
				files: [
					'src/amkodor/images/*.{png,jpg,gif,svg}',
					'src/images/css/*.{png,jpg,gif,svg}'
				],
				tasks: ['notify:watch', 'newer:imagemin', 'less', 'autoprefixer','notify:done']
			}
		},
		notify: {
			watch: {
				options: {
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: 'Запуск',
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			done: {
				options: { 
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: "Успешно Завершено",
					image: '<%= globalConfig.imageNotyfy %>'
				}
			}
		}
	});
	grunt.registerTask('default', 	['notify:watch','newer:imagemin', 'less', 'autoprefixer', 'uglify','jade','concat','notify:done']);
	
	grunt.registerTask('dev', 		['watch']);
	
}