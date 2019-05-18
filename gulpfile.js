var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var header = require('gulp-header');
var pump = require('pump');

var fileName = "anonymus";
var folderDestination = "dist/";
var folderDocs = "docs/assets/js/";
var package = require('./package.json');
var headerString = ['/*',
	'<%= pkg.name %> v<%= pkg.version %> (<%= pkg.license %>) |',
	'<%= pkg.author %> |',
	'<%= pkg.homepage %>',
	'*/\n'
].join(' ');

gulp.task("build-js", function (callback) {
	pump([
		gulp.src("index.js"),
		uglify(),
		concat(fileName + ".min.js"),
		header(headerString, {
			pkg: package
		}),
		gulp.dest(folderDestination),
		gulp.dest(folderDocs)
	], callback);
});

gulp.task("default", ["build-js"]);