const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const del = require("del");
const tsconfig = require("./tsconfig.json");

function clean() {
  return del("./lib/**");
}

function buildStyle() {
  return gulp
    .src(["./src/**/*.less"], {
      base: "./src/",
      ignore: ["**/demos/**/*", "**/tests/**/*"],
    })
    .pipe(
      less({
        paths: [path.join(__dirname, "src")],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest("./lib"))
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ESNext",
  });
  return gulp
    .src(["src/**/*.{ts,tsx}"], {
      ignore: ["**/demos/**/*", "**/tests/**/*"],
    })
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest("lib/"));
}

exports.default = gulp.series(clean, buildES, buildStyle);
