var gulp = require('gulp');
var tsc = require('gulp-typescript');
var project = tsc.createProject('./tsconfig.json');

var paths = {
	"compile": ["examples/**/*.ts"],
	"copy": ["examples/**/jsconfig.json"],
	"output": "build/release"
}

gulp.task('copy', function() {
	return gulp.src(paths.copy)
		.pipe(gulp.dest(paths.output));
});

gulp.task('compile', function () {
	return gulp.src(paths.compile)
		.pipe(tsc(project))
		.js.pipe(gulp.dest(paths.output));
});

gulp.task('watch', function() {
	gulp.watch(paths.compile, ['compile']);
	gulp.watch(paths.copy, ['copy']);
});

gulp.task('default', ['compile', 'copy']);