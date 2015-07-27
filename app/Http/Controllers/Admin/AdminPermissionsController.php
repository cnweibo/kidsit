<?php

namespace Kidsit\Http\Controllers\Admin;

use Illuminate\Http\Request;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\View;
use Kidsit\models\rbac\Permission;
use Bllim\Datatables\Facade\Datatables;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
class AdminPermissionsController extends Controller
{
    /**
     * 
     */
    public function __construct()
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getIndex()
    {
        // Title
        $title = Lang::get('admin/permissions/title.role_management');
        // Show the page
        return View::make('admin/permissions/index', compact('title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function getCreate()
    {
        // Title
        $title = Lang::get('admin/permissions/title.create_a_new_permission');

        // Show the page
        return View::make('admin/permissions/create', compact( 'title'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function postCreate()
    {

        // Declare the rules for the form validation
        $rules = array(
            'name' => 'required'
        );

        // Validate the inputs
        $validator = Validator::make(Input::all(), $rules);
        // Check if the form validates with success
        if ($validator->passes())
        {
        // Get the inputs, with some exceptions
            $inputs = Input::except('csrf_token');

            $newPermission = new Permission();
            $newPermission->name = $inputs['name'];
            $newPermission->description = $inputs['description'];
            $newPermission->save();
            // Was the role created?
            if ($newPermission->id)
            {
                // Redirect to the new role page
                return Redirect::to('admin/permissions/' . $newPermission->id . '/edit')->with('success', Lang::get('admin/permissions/messages.create.success'));
            }

            // Redirect to the new role page
            return Redirect::to('admin/permissions/create')->with('error', Lang::get('admin/permissions/messages.create.error'));

            // Redirect to the role create page
            return Redirect::to('admin/permissions/create')->withInput()->with('error', Lang::get('admin/permissions/messages.' . $error));
        }

        // Form validation failed
        return Redirect::to('admin/permissions/create')->withInput()->withErrors($validator);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Response
     */
    public function getShow($id)
    {
        // redirect to the frontend
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $role
     * @return Response
     */
    public function getEdit($permission)
    {
        if(! empty($permission))
        {
            // Title
            $title = Lang::get('admin/permissions/title.permission_update');

            // Show the page
            return View::make('admin/permissions/edit', compact('permission', 'title'));
        }
        else
        {
            // Redirect to the permissions management page
            return Redirect::to('admin/permissions')->with('error', Lang::get('admin/permissions/messages.does_not_exist'));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $permission
     * @return Response
     */
    public function postEdit($permission)
    {
        // Declare the rules for the form validation
        $rules = array(
            'name' => 'required'
        );

        // Validate the inputs
        $validator = Validator::make(Input::all(), $rules);

        // Check if the form validates with success
        if ($validator->passes())
        {
            // Update the permission data
            $permission->name        = Input::get('name');
            $permission->description   = Input::get('description');
            // Was the permission updated?
            if ($permission->save())
            {
                // Redirect to the permission page
                return Redirect::to('admin/permissions/' . $permission->id . '/edit')->with('success', Lang::get('admin/permissions/messages.update.success'));
            }
            else
            {
                // Redirect to the permission page
                return Redirect::to('admin/permissions/' . $permission->id . '/edit')->with('error', Lang::get('admin/permissions/messages.update.error'));
            }
        }

        // Form validation failed
        return Redirect::to('admin/permissions/' . $permission->id . '/edit')->withInput()->withErrors($validator);
    }


    /**
     * Remove user page.
     *
     * @param $permission
     * @return Response
     */
    public function getDelete($permission)
    {
        // Title
        $title = Lang::get('admin/permissions/title.permission_delete');

        // Show the page
        return View::make('admin/permissions/delete', compact('permission', 'title'));
    }

    /**
     * Remove the specified user from storage.
     *
     * @param $permission
     * @internal param $id
     * @return Response
     */
    public function postDelete($permission)
    {
            // Was the permission deleted?
            if($permission->delete()) {
                // Redirect to the permission management page
                return Redirect::to('admin/permissions')->with('success', Lang::get('admin/permissions/messages.delete.success'));
            }

            // There was a problem deleting the permission
            return Redirect::to('admin/permissions')->with('error', Lang::get('admin/permissions/messages.delete.error'));
    }

    /**
     * Show a list of all the permissions formatted for Datatables.
     *
     * @return Datatables JSON
     */
    public function getData()
    {
        $permissions = Permission::select(array('permissions.id',  'permissions.name','permissions.description', 'permissions.id as users'));

        return Datatables::of($permissions)
        // ->edit_column('created_at','{{{ Carbon::now()->diffForHumans(Carbon::createFromFormat(\'Y-m-d H\', $test)) }}}')
        ->edit_column('users', '{{{ DB::table(\'permission_role\')->where(\'permission_id\', \'=\', $id)->count()  }}}')


        ->add_column('actions', '<a href="{{{ URL::to(\'admin/permissions/\' . $id . \'/edit\' ) }}}" class="iframe btn btn-xs btn-default">{{{ Lang::get(\'button.edit\') }}}</a>
                                <a href="{{{ URL::to(\'admin/permissions/\' . $id . \'/delete\' ) }}}" class="iframe btn btn-xs btn-danger">{{{ Lang::get(\'button.delete\') }}}</a>
                    ')

        ->remove_column('id')

        ->make();
    }
}
