const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');







const caminhos = {
    scss: 'src/styles/**/*.scss',
    js: "src/js/**/*.js",
    images: 'src/images/**/*',
    distCSS: 'dist/styles',
    distJS: 'dist/js',
    distImages: 'dist/images'

};

gulp.task('styles', function (){
    return gulp
    .src(caminhos.scss)
    .pipe(sass({outoutStyle: "compressed"}))
    .pipe(gulp.dest(caminhos.distCSS));
});


gulp.task('scripts', function (){
    return gulp
    .src(caminhos.js)
    .pipe(uglify())
    .pipe(gulp.dest(caminhos.distJS));
});


gulp.task('images', function(){
    return gulp
    .src(caminhos.images)
    .pipe(imagemin())
    .pipe(gulp.dest(caminhos.distImages))
})

gulp.task('watch', function(){
    gulp.watch(caminhos.scss, gulp.series('styles'));
    gulp.watch(caminhos.js, gulp.series('scripts'));
});

gulp.task("default", gulp.series('styles', 'scripts', 'images', 'watch'));