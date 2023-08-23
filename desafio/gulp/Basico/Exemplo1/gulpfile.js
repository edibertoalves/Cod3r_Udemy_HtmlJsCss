const { series, task } = require('gulp');
const gulp = require('gulp');
const { src, dest } = require('gulp');
const gulpConcat = require('gulp-concat');
const uglify = require('gulp-uglify');




function CopyPaste(cb) {

    return gulp.src('origem/*.txt')
        .pipe(gulpConcat('arquivoFinal.txt'))
        // .pipe(uglify())
        .pipe(dest('destino'));

}

function callTask(cb) {
    return cb();
}

const callLog = (cb) => { console.log('call log '); return cb()}

gulp.task('default', function(cb) {
    callLog(cb);
    console.log('tarefa concluída');
})


// exports.default = series(CopyPaste, callTask, callLog);