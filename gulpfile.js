var gulp = require('gulp'), 
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	gcmq = require('gulp-group-css-media-queries'),
	jade = require('gulp-jade'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	dateFormat = require('dateformat'),
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;


gulp.task('default', function(){
	console.log('Ejecuta ncu -ua.\nPara que te funcione, tienes que tener instalado npm-check-updates de forma global\n(npm install npm-check-updates -g) \nDespués debes volver a ejecutar npm install para que se actualicen los módulos. \nBuen trabajo. Éstas son las tareas que puedes ejecutar.\n  gulp sourcejs (solo para componentes)\n gulp jsfull (concatenado y minificado todo)\n gulp styles-css (compilado scss y escucha)\n gulp styles-min (compilado y minificado todo)\n gulp jade-comp (compilado jade)\n gulp cjj-min (compilar styles-min, jade-comp, jsfull)\n gulp cjj (compilar styles-min, jade-comp, sourcejs)\n gulp css-jade (compilar styles-min y jade-comp)\n gulp css-js (compilar styles-min y sourcejs)\n gulp jade-js (compilar jade-comp y sourcejs)\n gulp css (compilar solo css minificado con escucha)\n gulp js (compilar solo js minificado con escucha)\n gulp jade (compilar solo jade con escucha)\n');
});
    
/* 
*	Configuración de la tarea 'styles-css' COMPILADO SCSS
*/
gulp.task('styles-css', function () {
	return gulp.src('source/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('source/scss'));
});
/* 
*	Configuración de la tarea 'styles-min' MINIFICADO
*/
gulp.task('styles-min', ['styles-css'], function () {
	gulp.src(['source/scss/bootstrap.min.css', 'source/scss/styles.css'])
		.pipe(concat('styles-concat.css'))
		.pipe(minifyCss({ processImport: false }))
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('public/lib/css'));
});


// COMPILACION DE JADE
gulp.task('jade-comp', function() {
    return gulp.src(['./source/jade/*.jade','!./source/jade/layout*.jade'])
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('js-comp', function() {
    return gulp.src(['./source/js/main.js'])
    .pipe(gulp.dest('public/lib/js/'));
});

//	COMBINACIÓN DE TAREAS con escuchas
/*
*	SCSS-JADE-JS (todo minificado)
*/
gulp.task('cjj-min', ['styles-min','jade-comp'], function () {
	gulp.watch(['source/scss/*.scss'], ['styles-css']).on("change", browserSync.reload);
	gulp.watch(['source/jade/*.jade','source/jade/components/*.jade','source/jade/partials/*.jade'], ['jade-comp']).on("change", browserSync.reload);
	gulp.watch(['source/js/main.js', 'source/js/components/*.js'], ['js-comp']).on("change", browserSync.reload);
	browserSync.init({
		server: {
			baseDir: "./public"
		}
	});

});