const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function padrao(cb) {

    return gulp.src('src/**/*.js')
        .pipe(babel({       // faz a transpilação
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())     // realiza o processo de minificação
        .on('error', err => console.log('erro : ' + err))
        .pipe(concat('codigo.min.js')) // nome do arquivo após o processo acima.
        .pipe(gulp.dest('build')); // pasta destino do arquivo.

}

function fim(cb){
    console.log('Fim');
    return cb();
}

exports.default = series(padrao, fim);