module.exports = function () {
	var config = {
                jsbuildpath: "public/build/js/",
		yinbiaoappdevjs: ["public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        "public/preparebuild/assets/libs/jquery-color/jquery.color.js",
                        "public/preparebuild/assets/libs/bootstrap/dist/js/bootstrap.min.js",
                        "public/htmlapp/syscommon/custom.js",
                        "public/preparebuild/assets/libs/angular/angular.min.js",
                        "public/preparebuild/assets/libs/angular-route/angular-route.min.js",
                        "public/htmlapp/yinbiaoApp/angularinit.js",
                        "public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.min.js",
                        "public/preparebuild/assets/libs/greensock/src/minified/TweenMax.min.js",
                        "public/htmlapp/yinbiaoApp/highlightppattern.js",
                        "public/htmlapp/syscommon/kidsitanimatelib.js",
                        "public/htmlapp/yinbiaoApp/guestaddword.js",
                        "public/preparebuild/assets/libs/angular-animate/angular-animate.min.js",
                        "public/htmlapp/yinbiaoApp/yinbiaoapp.js"],
                yinbiaoappbuildjs: "yinbiaoApp.min.js",
                admingradeappdevjs: [
                        "public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        "public/preparebuild/assets/libs/angular/angular.js",
                        "public/preparebuild/assets/libs/angular-route/angular-route.js",
                        "public/preparebuild/assets/libs/angular-animate/angular-animate.js",                        
                        "public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        "public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        "public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        "public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        "public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        "public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        "public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        "public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        "public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        "public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",      
                        "public/htmlapp/system/grade/gradeApp.mod.js",
                        "public/htmlapp/system/container.ctrl.js",
                        "public/htmlapp/syscommon/khttp.srv.js",
                        "public/htmlapp/system/grade/gradeList.ctrl.js",
                        "public/htmlapp/system/grade/gradeCreate.ctrl.js",
                        "public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js"],
                admingradeappbuildjs: "admingradeApp.min.js",
                adminteacherappdevjs: [
                        "public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        "public/preparebuild/assets/libs/angular/angular.js",
                        "public/preparebuild/assets/libs/angular-route/angular-route.js",
                        "public/preparebuild/assets/libs/angular-animate/angular-animate.js",        
                        "public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        "public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        "public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        "public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        "public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        "public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        "public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        "public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        "public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        "public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",      
                        "public/htmlapp/system/teacher/teacherApp.mod.js",
                        "public/htmlapp/system/container.ctrl.js",
                        "public/htmlapp/syscommon/khttp.srv.js",
                        "public/htmlapp/syscommon/simplevalidate.srv.js",
                        "public/htmlapp/system/teacher/teacherList.ctrl.js",
                        "public/htmlapp/system/teacher/teacherCreate.ctrl.js",
                        "public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                        "public/preparebuild/assets/js/custom.js"],
                adminteacherappbuildjs: "adminteacherApp.min.js",
                adminclassroomappdevjs: [
                        "public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        "public/preparebuild/assets/libs/underscore/underscore.js",
                        "public/preparebuild/assets/libs/angular/angular.js",
                        "public/preparebuild/assets/libs/angular-route/angular-route.js",
                        "public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                        "public/preparebuild/assets/libs/angular-messages/angular-messages.js",
                        "public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        "public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        "public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        "public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        "public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        "public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        "public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        "public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        "public/htmlapp/syscommon/angular-validate-directive/validate.js",
                        "public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        "public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",
                        "public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js",
                        "public/preparebuild/assets/libs/angular-filter/dist/angular-filter.js",      
                        "public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                        "public/htmlapp/system/classroom/classroomApp.mod.js",
                        "public/htmlapp/system/container.ctrl.js",
                        "public/htmlapp/syscommon/khttp.srv.js",
                        "public/htmlapp/syscommon/simplevalidate.srv.js",
                        "public/htmlapp/system/classroom/classroomList.ctrl.js",
                        "public/htmlapp/system/classroom/classroomCreate.ctrl.js",
                        "public//preparebuild/assets/js/custom.js"],
                adminclassroomappbuildjs: "adminclassroomApp.min.js",
                adminstudentappdevjs: [
                        "public/preparebuild/assets/libs/jquery/dist/jquery.min.js",
                        "public/preparebuild/assets/libs/underscore/underscore.js",
                        "public/preparebuild/assets/libs/angular/angular.js",
                        "public/preparebuild/assets/libs/angular-route/angular-route.js",
                        "public/preparebuild/assets/libs/angular-animate/angular-animate.js",
                        "public/preparebuild/assets/libs/angular-messages/angular-messages.js",
                        "public/preparebuild/assets/libs/angular-ui-utils/index.js",
                        "public/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js",
                        "public/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js",
                        "public/preparebuild/assets/libs/angular-ui-event/dist/event.js",
                        "public/preparebuild/assets/libs/angular-ui-mask/dist/mask.js",
                        "public/preparebuild/assets/libs/angular-ui-validate/dist/validate.js",
                        "public/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js",
                        "public/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js",
                        "public/htmlapp/syscommon/angular-validate-directive/validate.js",
                        "public/preparebuild/assets/libs/angular-busy/dist/angular-busy.js",
                        "public/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js",
                        "public/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js",
                        "public/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js",     
                        <!-- fuzzy search -->
                        "public/preparebuild/assets/libs/angular-filter/dist/angular-filter.js",
                        "public/htmlapp/system/student/studentApp.mod.js",
                        "public/htmlapp/system/container.ctrl.js",
                        "public/htmlapp/syscommon/khttp.srv.js",
                        "public/htmlapp/system/student/studentList.ctrl.js",
                        "public/htmlapp/system/student/studentCreate.ctrl.js"],
                adminstudentappbuildjs: "adminstudentApp.min.js"
	};
	return config;
}