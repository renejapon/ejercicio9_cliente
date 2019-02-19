var gulp = require('gulp'), 
    jade = require('gulp-jade'),
    browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;


gulp.task('default', function(){
	console.log('Ejecuta ncu -ua.\nPara que te funcione, tienes que tener instalado npm-check-updates de forma global\n(npm install npm-check-updates -g) \nDespués debes volver a ejecutar npm install para que se actualicen los módulos. \nBuen trabajo. Éstas son las tareas que puedes ejecutar.\n  gulp sourcejs (solo para componentes)\n gulp jsfull (concatenado y minificado todo)\n gulp styles-css (compilado scss y escucha)\n gulp styles-min (compilado y minificado todo)\n gulp jade-comp (compilado jade)\n gulp cjj-min (compilar styles-min, jade-comp, jsfull)\n gulp cjj (compilar styles-min, jade-comp, sourcejs)\n gulp css-jade (compilar styles-min y jade-comp)\n gulp css-js (compilar styles-min y sourcejs)\n gulp jade-js (compilar jade-comp y sourcejs)\n gulp css (compilar solo css minificado con escucha)\n gulp js (compilar solo js minificado con escucha)\n gulp jade (compilar solo jade con escucha)\n');
});
    

 
// COMPILACION DE JADE
gulp.task('jade-comp', function() {
    return gulp.src(['./source/jade/*.jade','!./source/jade/layout*.jade'])
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('public'));
});

//	COMBINACIÓN DE TAREAS con escuchas
/*
*	SCSS-JADE-JS (todo minificado)
*/
gulp.task('cjj-min', [ 'jade-comp'], function () {
	// gulp.watch('source/sass/*.scss', ['styles-min']);
	gulp.watch(['source/jade/*.jade','source/jade/components/*.jade'], ['jade-comp']).on("change", browserSync.reload);;
	// gulp.watch(['source/js/source/main.js', 'js/components/*.js'], ['jsfull']);
	browserSync.init({
		server: {
			baseDir: "./public"
		}
	});

});