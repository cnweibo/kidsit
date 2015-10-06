var config = require('./gulp.config.js')();
var gulp = require('gulp');
var concat =require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var expect = require('gulp-expect-file');
var printfileinfo = require('gulp-print');
var inject = require('gulp-inject');
var argv = require('yargs').argv;
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
// lazy load gulp plugins
var $ = require('gulp-load-plugins')({lazy: true});
/**
 * List the available gulp tasks
 */
var jsbuildpath = config.jsbuildpath;
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);
gulp.task('less',function(){
   return gulp
       .src('resources/assets/less/app.less')
       .pipe(less())
       .pipe(rename('bootstrap.css'))
       .on('error',console.log)
       .pipe(gulp.dest('./public/preparebuild/assets/libs/bootstrap/dist/css/'));
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

// yinbiaoAPP js build
gulp.task('yinbiaoapp-dev',function () {
    log('injecting dev dependency into site.yinbiao.show.blade.php ...');
    var yinbiaojsfiles = config.yinbiaoappdevjs;
    var targetlocation = './resources/views/site/yinbiao/';
    var targethtml = gulp.src('./resources/views/site/yinbiao/show.blade.php');
    var sources = gulp.src(yinbiaojsfiles, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(yinbiaojsfiles)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});

gulp.task('yinbiaoapp-injectbuildjs',['yinbiaoapp-buildminjs'], function () {
    log('injecting build js into site.yinbiao.show.blade.php ...');
    var yinbiaojsfiles = config.yinbiaoappbuildjs;
    var targetlocation = './resources/views/site/yinbiao/';
    var targethtml = gulp.src('./resources/views/site/yinbiao/show.blade.php');
    var sources = gulp.src(yinbiaojsfiles, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(yinbiaojsfiles)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});

gulp.task('yinbiaoapp-buildminjs',function(){

    log('Building yinbiaoapp js to public/build for production...');
    var yinbiaojsfiles = config.yinbiaoappdevjs;
    return gulp
        .src(yinbiaojsfiles)
        .pipe(expect(yinbiaojsfiles))
        .pipe(printfileinfo())
        .pipe(concat('yinbiaoApp.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('yinbiaoapp-build',['yinbiaoapp-injectbuildjs'],function(){

    log('Building yinbiaoapp dependency done ...');
    
    return;
});

// adminGradeAPP js build
gulp.task('admingradeapp-dev',function () {
    log('injecting dev dependency into admin.system.grade.index.blade.phhp ...');
    var admingradeappjs = config.admingradeappdevjs;
    var targetlocation = './resources/views/admin/system/grades/';
    var targethtml = gulp.src('./resources/views/admin/system/grades/index.blade.php');
    var sources = gulp.src(admingradeappjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(admingradeappjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('admingradeapp-injectbuildjs',['admingradeapp-buildminjs'], function () {
    log('injecting build js into admin.system.grade.index.blade.php ...');
    var admingradeappminjs = config.admingradeappbuildjs;
    var targetlocation = './resources/views/admin/system/grades/';
    var targethtml = gulp.src(targetlocation+ 'index.blade.php');
    var sources = gulp.src(jsbuildpath+admingradeappminjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(jsbuildpath+admingradeappminjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('admingradeapp-buildminjs',function(){

    log('Building admingradeapp js to public/build for production...');
    var admingradeappjs = config.admingradeappdevjs;
    var admingradeappminjs = config.admingradeappbuildjs;
    log(admingradeappminjs);
    return gulp
        .src(admingradeappjs)
        .pipe(expect(admingradeappjs))
        .pipe(printfileinfo())
        .pipe(concat(admingradeappminjs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});
gulp.task('admingradeapp-build',['admingradeapp-injectbuildjs'],function(){

    log('Building admingradeapp dependency done ...');
    
    return;
});

// adminTeacherAPP js build
gulp.task('adminteacherapp-dev',function () {
    log('injecting dev dependency into  admin.system.teacher.index.blade.php ...');
    var adminteacherappjs = config.adminteacherappdevjs;
    var targetlocation = './resources/views/admin/system/teachers/';
    var targethtml = gulp.src('./resources/views/admin/system/teachers/index.blade.php');
    var sources = gulp.src(adminteacherappjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(adminteacherappjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminteacherapp-injectbuildjs',['adminteacherapp-buildminjs'], function () {
    log('injecting build js into admin.system.grade.index.blade.php ...');
    var adminteacherappminjs = config.adminteacherappbuildjs;
    var targetlocation = './resources/views/admin/system/teachers/';
    var targethtml = gulp.src(targetlocation+ 'index.blade.php');
    var sources = gulp.src(jsbuildpath+adminteacherappminjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(jsbuildpath+adminteacherappminjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminteacherapp-buildminjs',function(){

    log('Building adminteacherapp js to public/build for production...');
    var adminteacherappjs = config.adminteacherappdevjs;
    var adminteacherappminjs = config.adminteacherappbuildjs;
    log(adminteacherappminjs);
    return gulp
        .src(adminteacherappjs)
        .pipe(expect(adminteacherappjs))
        .pipe(printfileinfo())
        .pipe(concat(adminteacherappminjs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});
gulp.task('adminteacherapp-build',['adminteacherapp-injectbuildjs'],function(){

    log('Building adminteacherapp dependency done ...');
    
    return;
});


// adminClassroomAPP js build
gulp.task('adminclassroomapp-dev',function () {
    log('injecting dev dependency into  admin.system.classroom.index.blade.php ...');
    var adminclassroomappjs = config.adminclassroomappdevjs;
    var targetlocation = './resources/views/admin/system/classrooms/';
    var targethtml = gulp.src('./resources/views/admin/system/classrooms/index.blade.php');
    var sources = gulp.src(adminclassroomappjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(adminclassroomappjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminclassroomapp-injectbuildjs',['adminclassroomapp-buildminjs'], function () {
    log('injecting build js into admin.system.classroom.index.blade.php ...');
    var adminclassroomappminjs = config.adminclassroomappbuildjs;
    var targetlocation = './resources/views/admin/system/classrooms/';
    var targethtml = gulp.src(targetlocation+ 'index.blade.php');
    var sources = gulp.src(jsbuildpath+adminclassroomappminjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(jsbuildpath+adminclassroomappminjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminclassroomapp-buildminjs',function(){

    log('Building adminclassroomapp js to public/build for production...');
    var adminclassroomappjs = config.adminclassroomappdevjs;
    var adminclassroomappminjs = config.adminclassroomappbuildjs;
    log(adminclassroomappminjs);
    return gulp
        .src(adminclassroomappjs)
        .pipe(expect(adminclassroomappjs))
        .pipe(printfileinfo())
        .pipe(concat(adminclassroomappminjs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});
gulp.task('adminclassroomapp-build',['adminclassroomapp-injectbuildjs'],function(){

    log('Building adminclassroomapp dependency done ...');
    
    return;
});


// adminStudentAPP js build
gulp.task('adminstudentapp-dev',function () {
    log('injecting dev dependency into  admin.system.student.index.blade.php ...');
    var adminstudentappjs = config.adminstudentappdevjs;
    var targetlocation = './resources/views/admin/system/students/';
    var targethtml = gulp.src('./resources/views/admin/system/students/index.blade.php');
    var sources = gulp.src(adminstudentappjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(adminstudentappjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminstudentapp-injectbuildjs',['adminstudentapp-buildminjs'], function () {
    log('injecting build js into admin.system.student.index.blade.php ...');
    var adminstudentappminjs = config.adminstudentappbuildjs;
    var targetlocation = './resources/views/admin/system/students/';
    var targethtml = gulp.src(targetlocation+ 'index.blade.php');
    var sources = gulp.src(jsbuildpath+adminstudentappminjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(jsbuildpath+adminstudentappminjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminstudentapp-buildminjs',function(){

    log('Building adminstudentapp js to public/build for production...');
    var adminstudentappjs = config.adminstudentappdevjs;
    var adminstudentappminjs = config.adminstudentappbuildjs;
    log(adminstudentappminjs);
    return gulp
        .src(adminstudentappjs)
        .pipe(expect(adminstudentappjs))
        .pipe(printfileinfo())
        .pipe(concat(adminstudentappminjs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});
gulp.task('adminstudentapp-build',['adminstudentapp-injectbuildjs'],function(){

    log('Building adminstudentapp dependency done ...');
    
    return;
});


// adminMathAPP js build
gulp.task('adminmathapp-dev',function () {
    log('injecting dev dependency into  admin.math.indexpage.blade.php ...');
    var adminmathappjs = config.adminmathappdevjs;
    var targetlocation = './resources/views/admin/math/';
    var targethtml = gulp.src('./resources/views/admin/math/indexpage.blade.php');
    var sources = gulp.src(adminmathappjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(adminmathappjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminmathapp-injectbuildjs',['adminmathapp-buildminjs'], function () {
    log('injecting build js into admin.math.indexpage.blade.php ...');
    var adminmathappminjs = config.adminmathappbuildjs;
    var targetlocation = './resources/views/admin/math/';
    var targethtml = gulp.src(targetlocation+ 'indexpage.blade.php');
    var sources = gulp.src(jsbuildpath+adminmathappminjs, {read: false});
    return targethtml.pipe(inject(sources.pipe(expect(jsbuildpath+adminmathappminjs)).pipe(printfileinfo()),{
        // remove the public relative path
        transform: function (filepath) {
        return '<script src="'+ filepath.replace('public/','')+'"></script>' ;
    }
    }))
    .pipe(gulp.dest(targetlocation));
});
gulp.task('adminmathapp-buildminjs',function(){

    log('Building adminmathapp js to public/build for production...');
    var adminmathappjs = config.adminmathappdevjs;
    var adminmathappminjs = config.adminmathappbuildjs;
    log(adminmathappminjs);
    return gulp
        .src(adminmathappjs)
        .pipe(expect(adminmathappjs))
        .pipe(printfileinfo())
        .pipe(concat(adminmathappminjs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});
gulp.task('adminmathapp-build',['adminmathapp-injectbuildjs'],function(){

    log('Building adminmathapp dependency done ...');
    
    return;
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