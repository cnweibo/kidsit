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
	<link rel="stylesheet" href="{{ asset('preparebuild/assets/libs/angular-busy/angular-busy.css') }}">
	<link rel="stylesheet" href="{{asset('preparebuild/assets/css/custom.css')}}">
@stop
@section('content')

	<div class="container" ng-app="mathApp" ng-controller="containerCtrl">
		@include('admin.partials.indicatorcontainer')
		
		
		<div ui-view></div> <!-- web app view -->
		
	</div>
@stop

{{-- Scripts --}}
@section('scripts')
	@include('admin.partials.csrf_token')
	<script type="text/javascript">

	</script>
	<!-- inject:js -->
	<script src="/build/js/adminmathindexApp.min.js"></script>
	<!-- endinject -->
@stop
