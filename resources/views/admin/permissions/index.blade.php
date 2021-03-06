@extends('admin.layouts.default')

{{-- Web site Title --}}
@section('title')
	{{{ $title }}} :: @parent
@stop

{{-- Content --}}
@section('content')
	<div class="page-header">
		<h3>
			权限管理

			<div class="pull-right">
				<a href="{{{ URL::to('admin/permissions/create') }}}" class="btn btn-small btn-info iframe"><span class="glyphicon glyphicon-plus-sign"></span> Create</a>
			</div>
		</h3>
	</div>

	<table id="permissions" class="table table-striped table-hover">
		<thead>
			<tr>
				<th class="col-md-3">{{{ Lang::get('admin/permissions/table.name') }}}</th>
				<th class="col-md-4">{{{ Lang::get('admin/permissions/table.description') }}}</th>
				<th class="col-md-2">{{{ Lang::get('admin/permissions/table.users') }}}</th>
				<th class="col-md-3">{{{ Lang::get('table.actions') }}}</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
@stop

{{-- Scripts --}}
@section('scripts')
	<script type="text/javascript">
		var oTable;
		$(document).ready(function() {
				oTable = $('#permissions').dataTable( {
				"sDom": "<'row'<'col-md-3'l><'col-md-4'f>r>t<'row'<'col-md-2'i><'col-md-3'p>>",
				"sPaginationType": "bootstrap",
				"oLanguage": {
					"sLengthMenu": "_MENU_ records per page"
				},
				"bProcessing": true,
		        "bServerSide": true,
		        "sAjaxSource": "{{ URL::to('admin/permissions/data') }}",
		        "fnDrawCallback": function ( oSettings ) {
	           		$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
	     		}
			});
		});
	</script>
@stop