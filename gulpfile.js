const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const uglify = require ('gulp-uglify')//comprime arquivos Js
const imagemin = require ('gulp-imagemin') //realize a compressão de imagens
// gulp-sass integra o gulp com o sass, mas o require sass que integra ao CSS

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


function comprimeJavaScript () {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}


function compilaSass(){
    return gulp.src('./source/styles/main.scss')//pega os arquivos fontes
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));//mostra a destinação
    //pipe tem a função de encadear as funções que estamos usando
}

exports.default = function (){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false }, gulp.series(comprimeImagens));
}
