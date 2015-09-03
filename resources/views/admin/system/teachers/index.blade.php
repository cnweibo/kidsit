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

	<div class="container" ng-app="teacherApp" ng-controller="containerCtrl">
		@include('admin.partials.indicatorcontainer')
		
		<div class="page-header">
			<h3>
				{{{ $title }}}

				<div class="pull-right">
					<a href="#/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> 新增教师</a>
					<!-- <a href="{{{ URL::to('admin/system/grade/create') }}}" class="btn btn-small btn-info iframe"><span class="glyphicon glyphicon-plus-sign"></span> 新增年级</a>  -->
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
	<script src="/preparebuild/assets/libs/spin.js/spin.js"></script>
	<script src="/preparebuild/assets/libs/angular/angular.js"></script>
	<script src="/preparebuild/assets/libs/angular-route/angular-route.js"></script>
	<script src="/preparebuild/assets/libs/angular-animate/angular-animate.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-utils/index.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-scroll/dist/ui-scroll.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-scrollpoint/dist/scrollpoint.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-event/dist/event.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-mask/dist/mask.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-validate/dist/validate.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-indeterminate/dist/indeterminate.js"></script>
	<script src="/preparebuild/assets/libs/angular-ui-uploader/dist/uploader.js"></script>
	<script src="/preparebuild/assets/libs/angular-busy/dist/angular-busy.js"></script>
	<script src="/preparebuild/assets/libs/angular-loading/angular-loading.js"></script>
	<script src="/preparebuild/assets/libs/angular-toastr/dist/angular-toastr.js"></script>
	<script src="/htmlapp/system/teacher/teacherApp.mod.js"></script>
	<script src="/htmlapp/system/container.ctrl.js"></script>
	<script src="/htmlapp/syscommon/khttp.srv.js"></script>
	<script src="/htmlapp/syscommon/simplevalidate.srv.js"></script>
	<script src="/htmlapp/system/teacher/teacherList.ctrl.js"></script>
	<script src="/htmlapp/system/teacher/teacherCreate.ctrl.js"></script>
	<script src="/preparebuild/assets/libs/angular-xeditable/dist/js/xeditable.js"></script>
	<script src="/preparebuild/assets/js/custom.js"></script>
	<!-- endinject -->
<!--(if target mathrelease)><!-->
<!-- <script type="text/javascript" src="{{asset('dist/appGrade.min.js')}}"></script>-->
<!--<!(endif)-->
@stop