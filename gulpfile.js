const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// create the css file from a scss source
function buildStyles() {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
}

// watch our source file and run buildStyles when the source file changed
function watchTask() {
  // first argument the file to wath
  // 2nd arg the callback to run when the files changed
  watch(["*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
