const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel'),
      gulpSequence = require('gulp-sequence');


gulp.task('es5', () => {
    return gulp.src(['*.js', '!gulpfile.js'])   // в поточній папці, в даному випадку - в кореневій папці
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('/tmp/build'));   // =./build
});
gulp.task('concat', () => {
    return gulp.src('/tmp/build/*.js')
        .pipe(concat('realise.js'))   // file
        .pipe(gulp.dest('build'));   // folder
});
gulp.task('uglify', () => {
    return gulp.src('build/realise.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});
gulp.task('watch', () => {
    gulp.watch(['primary1.js', 'primary2.js'], ['compile'])
});
gulp.task('compile',  function(callback) {
    gulpSequence('es5', 'concat', 'uglify') (callback)
}); 

gulp.task('default', ['compile', 'watch']);