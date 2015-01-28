var gulp = require('gulp'),
	concat = require("gulp-concat"),
	jshint = require("gulp-jshint"),
	watch = require("gulp-watch"),
	connet = require("gulp-connect"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename");
	
var path = {
	scripts:"js/*.js",
	concat:["js/intro.js", "js/map.js", "js/draw.js", "js/outro.js"],
	hint:["js/draw.js"],
	combined:"js/drawMap.combined.js"
};

gulp.task("default", function(){
	
	gulp.watch(path.scripts, ['concat']);
	gulp.watch(path.combined, ['jshint']);

});

gulp.task("concat", function(){
	
	gulp.src(path.concat)
		.pipe(concat(path.combined))
		.pipe(gulp.dest(""));

});

gulp.task("jshint", function(){
	
	return gulp.src(path.hint)			
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
		
});