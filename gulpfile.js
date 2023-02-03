import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import { deleteAsync } from 'del'
import browserSync from 'browser-sync'
import terser from 'gulp-terser'
import sourcemaps from 'gulp-sourcemaps'
import gulpIf from 'gulp-if'

const sass = gulpSass(dartSass)
const isProd = process.argv.includes('--prod')
const distName = isProd ? 'dist' : 'dev'


function html() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: isProd,
            minifyCSS: isProd
        }))
        .pipe(gulp.dest(distName))
}

function scss() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(sass(isProd ? {outputStyle: 'compressed'} : {}))
        .pipe(gulpIf(!isProd,sourcemaps.write('./')))
        .pipe(gulp.dest(`${distName}/css`))
}

function clear() {
    return deleteAsync(distName)
}

function copyAssets() {
    return gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest(`${distName}/assets`))
}

function js() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(gulpIf(isProd, terser()))
        .pipe(gulpIf(!isProd,sourcemaps.write('./')))
        .pipe(gulp.dest(`${distName}/js`))
}

function serve() {
    browserSync.init({ server: distName })

    gulp.watch('src/**/*.html', html).on('change', browserSync.reload)
    gulp.watch('src/scss/**/*.scss', scss).on('change', browserSync.reload)
}

gulp.task('build', gulp.series(clear, copyAssets, js, scss, html))
gulp.task('watch', gulp.series(clear, copyAssets, js, scss, html, serve))