var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('default', function() {
	var b = browserify({
		entries: './src/circles.js',
		paths: [ __dirname + '/src' ],
		debug: true,
		transform: [ babelify ]
	});
	return b.bundle()
		.pipe(source('circles.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
		.on('error', gutil.log)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/js'));
	gulp.src('html/index.html')
		.pipe(gulp.dest('dist'));
});
