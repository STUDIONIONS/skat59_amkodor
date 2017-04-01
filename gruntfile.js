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
						'src/amkodor/less/main.less'
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
				dest: 'assets/templates/leadingpage/css/'
			}
		},
		copy: {
			fonts: {
				files: [
					{
						expand: true,
						flatten : true,
						filter: 'isFile',
						src: [
							'bower_components/bootstrap/dist/fonts/**',
							'src/amkodor/fonts/**'
						],
						dest: 'assets/templates/leadingpage/fonts/'
					},
				]
			}
		},
		uglify : {
			options: {
				ASCIIOnly: true
			},
			main: {
				files: {
					'assets/templates/leadingpage/js/main.js': [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
						'bower_components/jquery-mousewheel/jquery.mousewheel.js',
						'src/amkodor/js/jquery.maskedinput.js',
						'src/amkodor/js/placeholder.js',
						'bower_components/hyphernationRUru/dist/jquery.hypher.js',
						'bower_components/hyphernationRUru/dist/ru-ru.js',
						'bower_components/fancybox/source/jquery.fancybox.js',
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
						cwd: 'src/amkodor/images/',
						src: [
							'**/*.{png,jpg,gif,svg}'
						],
						dest: 'assets/templates/leadingpage/images/'
					},
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
					basedir: "/",
					data: {
						debug: false
					}
				},
				files: {
					"test/amkodor/index.php": [
						"src/amkodor/html/index.jade"
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
					'src/amkodor/php/header.php',
					'src/amkodor/php/config/config.php',
					'src/amkodor/php/send.php',
					'test/amkodor/index.php'
				],
				dest: 'index.php',
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
					'src/amkodor/less/**/*.{css,less}',
				],
				tasks: ['notify:watch', 'less', 'autoprefixer','notify:done']
			},
			images: {
				files: [
					'src/amkodor/images/*.{png,jpg,gif,svg}',
					'src/amkodor/images/proizvod/**/*.{png,jpg,gif,svg}',
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
	grunt.registerTask('default', 	['notify:watch', 'copy', 'newer:imagemin', 'less', 'autoprefixer', 'uglify','jade','concat','notify:done']);
	
	grunt.registerTask('dev', 		['watch']);
	
}