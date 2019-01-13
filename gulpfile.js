var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

var fileName = "anonymus";
var folderDestination = "dist/";

gulp.task("build-js", function (callback) {
	pump([
		gulp.src("index.js"),
		uglify(),
		concat(fileName + ".min.js"),
		gulp.dest(folderDestination),
	], callback);
});

gulp.task("default", ["build-js"]);