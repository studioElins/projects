// розмещение пакетов //
var gulp = require('gulp');
var autipref = require('gulp-autoprefixer');


gulp.task('autopref', function(){
	return gulp.src("app/css/**.css")
	.pipe(autipref(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest("app/css"));
});

gulp.task("default",["autopref"], function(){

})