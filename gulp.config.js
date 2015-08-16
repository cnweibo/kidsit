module.exports = function () {
	var config = {
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
                yinbiaoappbuildjs: ["public/build/js/yinbiaoApp.min.js"]        
	};
	return config;
}