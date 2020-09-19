const { doesNotMatch } = require('assert');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(done){
    gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
    done();
});