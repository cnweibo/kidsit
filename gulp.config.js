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
                admingradeappbuildjs: "admingradeApp.min.js"
	};
	return config;
}