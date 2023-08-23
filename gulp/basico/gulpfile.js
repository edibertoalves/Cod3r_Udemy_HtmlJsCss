const gulp = require('gulp');
const {series, parallel, task } = require('gulp');
const gulpConcat = require('gulp-concat');


const antes1 = cb => {
    console.log('Tarefa Antes 1');
    return cb();
};

const antes2 = cb => {
    console.log('Tarefa Antes 2');
    return cb();
};

function copiar(cb){
    // console.log('tarefa de copiar');
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('pastaB'));
    return cb();
};

function mesclar(cb){
    
}

const fim = cb => {
    console.log('Tarefa Fim');
    return cb();
};

exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
    
);   