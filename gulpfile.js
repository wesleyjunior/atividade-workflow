var gulp = require('gulp');
var minificar = require('gulp-clean-css');
var concatenar = require('gulp-concat-css');
var compilar = require('gulp-sass');
var minificarHtml = require('gulp-htmlmin');

//Variaveis com o caminho origem dos arquivos .scss e .html
var scssFiles = './source/scss/*.scss';
var htmlFile = './source/index.html';

//Variaveis com o caminho destino dos arquivos .scss e .html
var destScssFiles = './dist/css';
var destHtmlFile = './dist';

//Tarefa que move arquivos scss (compilando, concatenando e minificando)
gulp.task('move-scss', function(){
	return gulp.src(scssFiles)
	       .pipe(compilar().on('error', compilar.logError))
	       .pipe(concatenar('style.min.css'))
	       .pipe(minificar())
	       .pipe(gulp.dest(destScssFiles));
});

//Tarefa que move arquivo index.html minificando
gulp.task('move-html', function(){
	return gulp.src(htmlFile)
	       .pipe(minificarHtml())
	       .pipe(gulp.dest(destHtmlFile));
});

//Tarefa que escuta modificações nos arquivos .scss e index.html
gulp.task('listenModFiles',function(){
	gulp.watch(scssFiles, ['move-scss']);
	gulp.watch(htmlFile, ['move-html']);
});