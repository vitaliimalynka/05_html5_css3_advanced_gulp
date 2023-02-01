import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import { deleteAsync } from 'del'
import browserSync from 'browser-sync'
import terser from 'gulp-terser'
import sourcemaps from 'gulp-sourcemaps'


const sass = gulpSass(dartSass)

function html() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist'))
}

function scss() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
}

function clear() {
    return deleteAsync('dist')
}

function copyAssets() {
    return gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'))
}

function js() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'))
}

function serve() {
    browserSync.init({ server: 'dist' })

    gulp.watch('src/**/*.html', html).on('change', browserSync.reload)
    gulp.watch('src/scss/**/*.scss', scss).on('change', browserSync.reload)
}

gulp.task('build', gulp.series(clear, copyAssets, js, scss, html))
gulp.task('watch', gulp.series(clear, copyAssets, js, scss, html, serve))