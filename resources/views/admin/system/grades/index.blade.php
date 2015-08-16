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

	<div class="container" ng-app="gradeApp" ng-controller="containerCtrl">
		@include('admin.partials.indicatorcontainer')
		
		<div class="page-header">
			<h3>
				{{{ $title }}}

				<div class="pull-right">
					<a href="#/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> 新增年级</a>
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
	<script src="/build/js/admingradeApp.min.js"></script>
	<!-- endinject -->
<!--(if target mathrelease)><!-->
<!-- <script type="text/javascript" src="{{asset('dist/appGrade.min.js')}}"></script>-->
<!--<!(endif)-->
@stop