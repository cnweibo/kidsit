var config = require('./gulp.config.js')();
var gulp = require('gulp');
var concat =require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var expect = require('gulp-expect-file');
var printfileinfo = require('gulp-print');
var inject = require('gulp-inject');
var argv = require('yargs').argv;
// lazy load gulp plugins
var $ = require('gulp-load-plugins')({lazy: true});
/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);
gulp.task('less',function(){
   return gulp
       .src('resources/assets/less/app.less')
       .pipe(less())
       .on('error',console.log)
       .pipe(gulp.dest('./public/build/css/style.css'));
});
gulp.task('layoutcss', function() {
    log('Processing site layout css files...');
    var layoutcssfiles = [
        'public/preparebuild/assets/libs/bootstrap/dist/css/bootstrap.css',
        'public/preparebuild/assets/libs/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.css',
        //'preparebuild/assets/libs/PACE/themes/blue/*.css',
        'public/preparebuild/assets/css/custom.css'
    ];
    return gulp
        .src(layoutcssfiles)
        .pipe(expect(layoutcssfiles))
        .pipe(printfileinfo())
        .pipe($.concat('bladelayout.min.css'))
        .pipe(gulp.dest('./public/build/css/'));
});


gulp.task('prebuildlib',function(){

    log('Publish bower components main files(js,css,image) to public/preparebuild for further build...');
    var prebuildedfiles = [
            //bower installed lib css files
            'resources/assets/bower_components/**/*.css',
     
            'resources/assets/bower_components/**/*.js',
            // images
            'resources/assets/bower_components/**/*.gif',
            'resources/assets/bower_components/**/*.png',
            'resources/assets/bower_components/**/*.jpg',
            'resources/assets/bower_components/**/*.ico',
            'resources/assets/bower_components/**/*.svg'
    ];
    return gulp
        .src(prebuildedfiles,{base: 'resources/assets/bower_components'})
        .pipe(expect(prebuildedfiles))
        .pipe(printfileinfo())
        .on('error',console.log)
        .pipe(gulp.dest('public/preparebuild/assets/libs'));
});
gulp.task('prebuildown',function(){

    log('Publish own components main files(js,css,image) to public/preparebuild for further build...');
    var prebuildedownfiles = [
            //bower installed lib css files
            'resources/assets/css/**/*.css',
            'resources/assets/js/**/*.js',
            'resources/assets/images/**/*.gif',
            'resources/assets/images/**/*.png',
            'resources/assets/images/**/*.jpg',
            'resources/assets/images/**/*.ico',
            'resources/assets/images/**/*.svg',

    ];
    return gulp
        .src(prebuildedownfiles,{base: 'resources/assets'})
        .pipe(expect(prebuildedownfiles))
        .pipe(printfileinfo())
        .on('error',console.log)
        .pipe(gulp.dest('public/preparebuild/assets'));
});
gulp.task('prebuildcss',function(){

    log('Publish resources CSS to public/preparebuild for clearifying bower installed libs...');
    var prebuildedcssfiles = [
            //bower installed lib css files
            'resources/assets/bower_components/**/*.css',
            // inhouse css design files
            'resources/assets/css/**/*.css'
    ];
    return gulp
        .src(prebuildedcssfiles,{base: 'resources/assets/bower_components'})
        .pipe(expect(prebuildedcssfiles))
        .pipe(printfileinfo())
        .on('error',console.log)
        .pipe(gulp.dest('public/preparebuild/assets/libs'));
});
gulp.task('prebuildjs',function(){

    log('Publish resources JS to public/preparebuild for clearifying bower installed libs...');
    var prebuildedjsfiles = [
            //bower installed lib js files 
            'resources/assets/bower_components/**/*.js',
            // //inhouse js
            'resources/assets/js/custom.js'
    ];
    return gulp
        .src(prebuildedjsfiles,{base: 'resources/assets/bower_components'})
        .pipe(expect(prebuildedjsfiles))
        .pipe(printfileinfo())
        // .on('error',console.log)
        .pipe(gulp.dest('public/preparebuild/assets/libs'));
});
gulp.task('prebuildimage',function(){

    log('Publish resources images to public/preparebuild for further handling and dev serving...');
    var prebuildedimagefiles = [
            'resources/assets/images/**/*.gif',
            'resources/assets/images/**/*.png',
            'resources/assets/images/**/*.jpg',
            'resources/assets/images/**/*.ico',
            'resources/assets/images/**/*.svg',
    ];
    return gulp
        .src(prebuildedimagefiles,{base: 'resources/assets/'})
        .pipe(expect(prebuildedimagefiles))
        .pipe(printfileinfo())
        .pipe(gulp.dest('public/preparebuild/assets/'));
});
gulp.task('buildfont',function(){

    log('Building font to public/build for production...');
    var buildfontfiles = [
            'resources/assets/bower_components/bootstrap/fonts/*.*',
    ];
    return gulp
        .src(buildfontfiles,{base: 'resources/assets/bower_components/bootstrap'})
        .pipe(expect(buildfontfiles))
        .pipe(printfileinfo())
        .pipe(gulp.dest('public/build/'));
});
gulp.task('buildimage',function(){

    log('Building images to public/build for production...');
    var buildimagefiles = [
            'resources/assets/images/**/*.gif',
            'resources/assets/images/**/*.png',
            'resources/assets/images/**/*.jpg',
    ];
    return gulp
        .src(buildimagefiles,{base: 'resources/assets/'})
        .pipe(expect(buildimagefiles))
        .pipe(printfileinfo())
        .pipe(gulp.dest('public/build/'));
});
gulp.task('buildsiteindexjs',function(){

    log('Building site index js to public/build for production...');
    var buildsiteindexjsfiles = [
            "public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
            "public/preparebuild/assets/libs/jquery-color/jquery.color.js",
            "public/preparebuild/assets/libs/bootstrap/dist/js/bootstrap.min.js",
            "public/htmlapp/syscommon/custom.js"
    ];
    return gulp
        .src(buildsiteindexjsfiles)
        .pipe(expect(buildsiteindexjsfiles))
        .pipe(printfileinfo())
        .pipe(concat('siteindex.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('yinbiaoappdev',function () {
    log('injecting dev dependency into site.yinbiao.show.blade.php ...');
    var yinbiaojsfiles = config.yinbiaoappjs;
    var targetfile = './resources/views/site/yinbiao/';
    var targethtml = gulp.src('./resources/views/site/yinbiao/show.blade.php');
    var sources = gulp.src(yinbiaojsfiles, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(yinbiaojsfiles)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetfile));
});
// support functions

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}