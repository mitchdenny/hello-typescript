var gulp = require('gulp');
var tsc = require('gulp-typescript');

gulp.task('compile', function () {
	return gulp.src('examples/**/*.ts')
		.pipe(tsc())
		.js.pipe(gulp.dest('build/release'));
});

gulp.task('default', ['compile']);