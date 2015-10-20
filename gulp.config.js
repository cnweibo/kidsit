module.exports = function () {
  var projectrootdir = "../Code/kidsit/";
	var config = {
                projectrootdir: projectrootdir,
                pagelessentry: [projectrootdir+"resources/assets/less/app.less"],
                lessfiles: projectrootdir+'resources/assets/less/**/*.less',
                jsbuildpath: projectrootdir+"public/build/js/",
		yinbiaoappdevjs: [projectrootdir+"public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/jquery-color/jquery.color.js",
                        projectrootdir+"public/preparebuild/assets/libs/bootstrap/dist/js/bootstrap.min.js",
                        projectrootdir+"public/htmlapp/syscommon/custom.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular/angular.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-route/angular-route.min.js",
                        projectrootdir+"public/htmlapp/yinbiaoApp/angularinit.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/greensock/src/minified/TweenMax.min.js",
                        projectrootdir+"public/htmlapp/yinbiaoApp/highlightppattern.js",
                        projectrootdir+"public/htmlapp/syscommon/kidsitanimatelib.js",
                        projectrootdir+"public/htmlapp/yinbiaoApp/guestaddword.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-animate/angular-animate.min.js",
                        projectrootdir+"public/htmlapp/yinbiaoApp/yinbiaoapp.js"],
                yinbiaoappbuildjs: "yinbiaoApp.min.js",
                admingradeappdevjs: [
                        projectrootdir+"public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular/angular.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-route/angular-route.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",
                        projectrootdir+"public/htmlapp/system/grade/gradeApp.mod.js",
                        projectrootdir+"public/htmlapp/system/container.ctrl.js",
                        projectrootdir+"public/htmlapp/syscommon/khttp.srv.js",
                        projectrootdir+"public/htmlapp/system/grade/gradeList.ctrl.js",
                        projectrootdir+"public/htmlapp/system/grade/gradeCreate.ctrl.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js"],
                admingradeappbuildjs: "admingradeApp.min.js",
                frontlayoutcssfiles: [
                    projectrootdir+"public/build/css/app.css",
                    // projectrootdir+"public/preparebuild/assets/libs/bootstrap/dist/css/bootstrap.css",
                    projectrootdir+"public/preparebuild/assets/libs/bootstrap/dist/css/bootstrap-theme.min.css",
                    projectrootdir+"public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.css",
                    //"preparebuild/assets/libs/PACE/themes/blue/*.css",
                    projectrootdir+"public/preparebuild/assets/css/custom.css"
                ],
                adminteacherappdevjs: [
                        projectrootdir+"public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/spin.js/spin.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular/angular.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-route/angular-route.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-loading/angular-loading.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",
                        projectrootdir+"public/htmlapp/system/teacher/teacherApp.mod.js",
                        projectrootdir+"public/htmlapp/system/container.ctrl.js",
                        projectrootdir+"public/htmlapp/syscommon/khttp.srv.js",
                        projectrootdir+"public/htmlapp/syscommon/simplevalidate.srv.js",
                        projectrootdir+"public/htmlapp/system/teacher/teacherList.ctrl.js",
                        projectrootdir+"public/htmlapp/system/teacher/teacherCreate.ctrl.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                        projectrootdir+"public/preparebuild/assets/js/custom.js"],
                adminteacherappbuildjs: "adminteacherApp.min.js",
                adminclassroomappdevjs: [
                        projectrootdir+"public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/underscore/underscore.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular/angular.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-route/angular-route.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-messages/angular-messages.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        projectrootdir+"public/htmlapp/syscommon/angular-validate-directive/validate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-filter/dist/angular-filter.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                        projectrootdir+"public/htmlapp/system/classroom/classroomApp.mod.js",
                        projectrootdir+"public/htmlapp/system/container.ctrl.js",
                        projectrootdir+"public/htmlapp/syscommon/khttp.srv.js",
                        projectrootdir+"public/htmlapp/syscommon/simplevalidate.srv.js",
                        projectrootdir+"public/htmlapp/system/classroom/classroomList.ctrl.js",
                        projectrootdir+"public/htmlapp/system/classroom/classroomCreate.ctrl.js",
                        projectrootdir+"public//preparebuild/assets/js/custom.js"],
                adminclassroomappbuildjs: "adminclassroomApp.min.js",
                adminstudentappdevjs: [
                        projectrootdir+"public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/underscore/underscore.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular/angular.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-route/angular-route.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-messages/angular-messages.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        projectrootdir+"public/htmlapp/syscommon/angular-validate-directive/validate.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-loading/angular-loading.min.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                        projectrootdir+"public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js",
                        // <!-- fuzzy search -->
                        projectrootdir+"public/preparebuild/assets/libs/angular-filter/dist/angular-filter.js",
                        projectrootdir+"public/htmlapp/system/student/studentApp.mod.js",
                        projectrootdir+"public/htmlapp/system/container.ctrl.js",
                        projectrootdir+"public/htmlapp/syscommon/khttp.srv.js",
                        projectrootdir+"public/htmlapp/system/student/studentList.ctrl.js",
                        projectrootdir+"public/htmlapp/system/student/studentCreate.ctrl.js"],
                adminstudentappbuildjs: "adminstudentApp.min.js",
                adminmathappdevjs: [
                       projectrootdir+"public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                       projectrootdir+"public/preparebuild/assets/libs/underscore/underscore.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular/angular.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-messages/angular-messages.js",
                       projectrootdir+"public/preparebuild/assets/libs/ui-router/release/angular-ui-router.min.js",

                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-utils/index.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        // <!-- introduce sync/async form validate mechanism -->
                       projectrootdir+"public/htmlapp/syscommon/angular-validate-directive/validate.js",
                        
                        
                        projectrootdir+"public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",


                        // <!-- we must place xeditable loading before module js -->
                       projectrootdir+"public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",

                        // <!-- typeahead -->
                       projectrootdir+"public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js",
                        // <!-- fuzzy search -->
                       projectrootdir+"public/preparebuild/assets/libs/angular-filter/dist/angular-filter.js",
                        // <!-- own js file -->
                       projectrootdir+"public/htmlapp/math/mathApp.mod.js",
                       projectrootdir+"public/htmlapp/system/container.ctrl.js",
                       projectrootdir+"public/htmlapp/syscommon/khttp.srv.js",
                       projectrootdir+"public/htmlapp/syscommon/simplevalidate.srv.js",
                       projectrootdir+"public/htmlapp/syscommon/parsers.srv.js",
                       projectrootdir+"public/htmlapp/math/skillcat/mathskillcatApp.mod.js",
                       projectrootdir+"public/htmlapp/math/skillcat/mathskillcatIndex.ctrl.js",
                       projectrootdir+"public/htmlapp/math/skillcat/mathskillcatList.ctrl.js",
                       projectrootdir+"public/htmlapp/math/skillcat/mathskillcatCreate.ctrl.js",
                       projectrootdir+"public/htmlapp/math/skill/mathskillApp.mod.js",
                       projectrootdir+"public/htmlapp/math/skill/mathskillIndex.ctrl.js",
                       projectrootdir+"public/htmlapp/math/skill/mathskillList.ctrl.js",
                       projectrootdir+"public/htmlapp/math/skill/mathskillCreate.ctrl.js",
                       projectrootdir+"public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                       projectrootdir+"public//preparebuild/assets/js/custom.js"],
                adminmathappbuildjs: "adminmathindexApp.min.js"
	};
	return config;
};