const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const merge = require("merge2");

const tsProject = ts.createProject("tsconfig.json");
const stream = tsProject.src().pipe(tsProject());

gulp.task("clean-up", () => {
  return del("dist/**", {
    force: true
  });
});

gulp.task("copy-docs", function () {
  return gulp.src('../../README.md')
    .pipe(gulp.dest('./'));
});

gulp.task("build-typescript", () => {
  return merge([
    stream.js.pipe(gulp.dest("dist/")),
    stream.dts.pipe(gulp.dest("dist/"))
  ]);
});

gulp.task("default", gulp.series(
  "clean-up",
  "copy-docs",
  "build-typescript"
));
