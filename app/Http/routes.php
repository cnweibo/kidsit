<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
//    xdebug_start_trace();
    return view('welcome');
//    xdebug_stop_trace();
});
// static pages:
Route::get('contact-us', function()
{

//    dd(Lang::get());
    return View::make('site/contact-us');
});


// math execise online small app routes:
Route::group(array('prefix' => 'math'), function(){
    // pupulate the exercise db routes
    Route::get('sumpopulate2_12', 'Math\MathsumpopulateController@index2_12');
    Route::get('sumpopulate2_21', 'Math\MathsumpopulateController@index2_21');
    Route::get('sumpopulate2_22', 'Math\MathsumpopulateController@index2_22');
    
    Route::get('mathmulti1_populate','Math\MathmultiplypopulateController@index1'); 
    Route::get('mathsummulti1_populate','Math\MathsummultiplypopulateController@index1');

    // exam create/list routes
    Route::get('exams/create', 'Math\MathexamsController@create' );
    Route::get('exams/submitanswer','Math\MathexamsController@submitAnswer');
    Route::get('exams/{examid}', 'Math\MathexamsController@show' ); 
    Route::get('exams', 'Math\MathexamsController@index' );    
});


// API access for the yinbiao mp3 audio file
Route::get('/getmp3/{filename}', 'Mp3Controller@getMp3');
// yinbiao routes
Route::get('yinbiao/wordlist', 'YinbiaoController@getWordlist');
Route::resource('yinbiao','YinbiaoController');
// yinbiao category routes
Route::resource('yinbiaocategory','YinbiaocategoryController');
// 音标发音规则
Route::resource('fayinguize', 'FayinguizeController');
Route::resource('guestaddedword', 'GuestaddedwordsController');


// user account routes:
Route::group(array('prefix' => 'user', 'middleware' => 'auth'), function (){
    Route::get('/reset/{token}', 'UserController@getReset');
    Route::post('/reset/{token}', 'UserController@postReset');
    Route::post('/{user}/edit', 'UserController@postEdit');
    Route::post('/login', 'UserController@postLogin');
    Route::post('/loginx', 'UserController@postLoginX');
    # User RESTful Routes (Login, Logout, Register, etc)
    Route::post('/logoutx','UserController@postLogoutX');
    Route::get('/loginstatusx','UserController@getLoginStatusX');
    Route::controller('/', 'UserController');
});
// for user auth login
Route::get('auth/login', 'UserController@getLogin');
Route::post('auth/login', 'UserController@postLogin');

// Home page
Route::get('/', array('uses' => 'IndexController@getIndex'));


/** ------------------------------------------
 *  Admin Routes
 *  ------------------------------------------
 */
Route::group(array('prefix' => 'admin' , 'middleware' => 'isAdmin'), function()
{

    # User Management
    Route::get('users/{user}/show', 'Admin\AdminUsersController@getShow');
    Route::get('users/{user}/edit', 'Admin\AdminUsersController@getEdit');
    Route::post('users/{user}/edit', 'Admin\AdminUsersController@postEdit');
    Route::get('users/{user}/delete', 'Admin\AdminUsersController@getDelete');
    Route::post('users/{user}/delete', 'Admin\AdminUsersController@postDelete');
    Route::controller('users', 'Admin\AdminUsersController');

    // roles routes
    # User Role Management
    Route::get('roles/{role}/show', 'Admin\AdminRolesController@getShow');
    Route::get('roles/{role}/edit', 'Admin\AdminRolesController@getEdit');
    Route::post('roles/{role}/edit', 'Admin\AdminRolesController@postEdit');
    Route::get('roles/{role}/delete', 'Admin\AdminRolesController@getDelete');
    Route::post('roles/{role}/delete', 'Admin\AdminRolesController@postDelete');
    Route::controller('roles', 'Admin\AdminRolesController');

    // permissions management
    Route::get('permissions/{permission}/show', 'Admin\AdminPermissionsController@getShow');
    Route::get('permissions/{permission}/edit', 'Admin\AdminPermissionsController@getEdit');
    Route::post('permissions/{permission}/edit', 'Admin\AdminPermissionsController@postEdit');
    Route::get('permissions/{permission}/delete', 'Admin\AdminPermissionsController@getDelete');
    Route::post('permissions/{permission}/delete', 'Admin\AdminPermissionsController@postDelete');
    Route::controller('permissions', 'Admin\AdminPermissionsController');

    
    // system grade management
    // global grade information admin apis for data feeding
    Route::group(array('prefix' => 'api'), function(){
        Route::resource('system/grade', 'Admin\System\AdminGradesController');
    });
    // Following is the GET request for laravel rendered html page funcioning as angular template partials
    Route::get('system/grade/', 'Admin\System\AdminGradesController@indexpage'); // index page
    // Route::get('system/grade/create', 'Admin\System\AdminGradesController@create'); // create page
    // Route::get('system/grade/{id}','Admin\System\AdminGradesController@show'); // show page
    Route::get('system/grade/{id}/delete','Admin\System\AdminGradesController@getDelete'); //delete page
    Route::get('system/grade/data', 'Admin\System\AdminGradesController@getData'); // ajax data feeding page
    // system teacher management
    // global teacher information admin apis for data feeding
    Route::group(array('prefix' => 'api'), function(){
        Route::resource('system/teacher', 'Admin\System\AdminTeachersController');
    });
    // Following is the GET request for laravel rendered html page funcioning as angular template partials
    Route::get('system/teacher/', 'Admin\System\AdminTeachersController@indexpage'); // index page
    Route::get('system/teacher/{id}/delete','Admin\System\AdminTeachersController@getDelete'); //delete page
    Route::get('system/teacher/data', 'Admin\System\AdminTeachersController@getData'); // ajax data feeding page
    // global classroom information admin apis for data feeding
    Route::group(array('prefix' => 'api'), function(){
        Route::resource('system/classroom', 'Admin\System\AdminClassroomsController');
    });
    // Following is the GET request for laravel rendered html page funcioning as angular template partials
    Route::get('system/classroom/', 'Admin\System\AdminClassroomsController@indexpage'); // index page
    Route::get('system/classroom/{id}/delete','Admin\System\AdminClassroomsController@getDelete'); //delete page
    Route::get('system/classroom/data', 'Admin\System\AdminClassroomsController@getData'); // ajax data feeding page
    // global student information admin apis for data feeding
    Route::group(array('prefix' => 'api'), function(){
        Route::resource('system/student', 'Admin\System\AdminStudentsController');
    });
    // Following is the GET request for laravel rendered html page funcioning as angular template partials
    Route::get('system/student/', 'Admin\System\AdminStudentsController@indexpage'); // index page
    Route::get('system/student/{id}/delete','Admin\System\AdminStudentsController@getDelete'); //delete page
    Route::get('system/student/data', 'Admin\System\AdminStudentsController@getData'); // ajax data feeding page


    // admin dashboard  Note:This must be the last route!!!
    Route::controller('/', 'Admin\AdminDashboardController');

});

/** ------------------------------------------
 *  Route model binding
 *  ------------------------------------------
 */
Route::model('user', 'Kidsit\User');
Route::model('role', 'Kidsit\Models\Rbac\Role');
Route::model('permission','Kidsit\Models\Rbac\Permission');

// Miscellaneous
Route::group(array('prefix'=>'helper'), function(){
	Route::get('classes', function(){
		$avaialbeClasses = get_declared_classes();
		foreach ($avaialbeClasses as $key => $value) {
			print_r($key.' '.$value);
			print_r(' ....  extends: '. '<strong>' .get_parent_class($value).'</strong></br>');
		}
		// dd(get_declared_classes());
	});
});
