@extends('admin.layouts.default')
@section('title')
	{{{ $title }}} |@parent
@stop
@section('keywords')
	{{-- expr --}}
@stop
@section('author')
	{{-- expr --}}
@stop
@section('description')
	{{-- expr --}}
@stop
@section('css')
	<link rel="stylesheet" href="{{asset('preparebuild/assets/libs/angular-xeditable/dist/css/xeditable.css')}}">
	<link rel="stylesheet" href="{{asset('preparebuild/assets/libs/angular-toastr/dist/angular-toastr.css')}}">
	<link rel="stylesheet" href="{{asset('preparebuild/assets/css/custom.css')}}">
@stop
@section('content')

	<div class="container" ng-app="studentApp" ng-controller="containerCtrl">
		@include('admin.partials.indicatorcontainer')
		
		<div class="page-header">
			<h3>
				{{{ $title }}}

				<div class="pull-right">
					<a href="#/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> 新增学生</a>
				</div>
			</h3>
		</div>
		<div ng-view></div> <!-- web app view -->
		
	</div>
@stop

{{-- Scripts --}}
@section('scripts')
	@include('admin.partials.csrf_token')
	<script type="text/javascript">

	</script>
	<!-- inject:js -->
	<script src="/preparebuild/assets/libs/jquery/dist/jquery.min.js"></script>
	<script src="/preparebuild/assets/libs/underscore/underscore.js"></script>
	<script src="/preparebuild/assets/libs/angular/angular.js"></script>
	<script src="/preparebuild/assets/libs/angular-route/angular-route.js"></script>
	<script src="/preparebuild/assets/libs/angular-animate/angular-animate.js"></script>
	<script src="/preparebuild/assets/libs/angular-messages/angular-messages.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-utils/index.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-event/dist/event.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-mask/dist/mask.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-validate/dist/validate.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js"></script>
	<script src="/htmlapp/syscommon/angular-validate-directive/validate.js"></script>
	<script src="/preparebuild/assets/libs/angular-busy/dist/angular-busy.js"></script>
	<script src="/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js"></script>
	<script src="/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js"></script>
	<script src="/preparebuild/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js"></script>
	<script src="/preparebuild/assets/libs/angular-filter/dist/angular-filter.js"></script>
	<script src="/htmlapp/system/student/studentApp.mod.js"></script>
	<script src="/htmlapp/system/container.ctrl.js"></script>
	<script src="/htmlapp/syscommon/khttp.srv.js"></script>
	<script src="/htmlapp/system/student/studentList.ctrl.js"></script>
	<script src="/htmlapp/system/student/studentCreate.ctrl.js"></script>
	<!-- endinject -->
@stop
