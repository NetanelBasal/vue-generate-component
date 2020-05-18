const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('dev', function() {
    return gulp.src(['./lib/**/*.js', '!./lib/blueprints/**/*.js'])
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('copy', function(callback) {
    gulp.src('./lib/blueprints/**/**', {
            base: "./lib"
        })
        .pipe(gulp.dest('./dist'));

    gulp.src('./lib/config/config.json')
        .pipe(gulp.dest('./dist/config'));
    callback()
});

gulp.task('clean', function() {
    return del([
        'dist/**'
    ]);
});


gulp.task('build', function(callback) {
    return gulp.series('clean',
        'dev',
        'copy')(callback)
});
