import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';

const pugHtml = () => {
   return gulp.src('./app/pug/index.pug')
      .pipe(plumber())
      .pipe(
         pug({
            pretty: true
         })
      )
      .pipe(plumber.stop())
      .pipe(gulp.dest('app'));
};

export default pugHtml;