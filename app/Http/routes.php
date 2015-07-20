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

Route::get('contact-us', function()
{

//    dd(Lang::get());
    return View::make('site/contact-us');
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


// Home page
Route::get('/', array('uses' => 'IndexController@getIndex'));


/** ------------------------------------------
 *  Admin Routes
 *  ------------------------------------------
 */

Route::group(array('prefix' => 'admin' , 'middleware' => 'isAdmin'), function()
{

    # User Management
    Route::get('users/{user}/show', 'Admiin\AdminUsersController@getShow');
    Route::get('users/{user}/edit', 'Admin\AdminUsersController@getEdit');
    Route::post('users/{user}/edit', 'Admin\AdminUsersController@postEdit');
    Route::get('users/{user}/delete', 'Admin\AdminUsersController@getDelete');
    Route::post('users/{user}/delete', 'Admin\AdminUsersController@postDelete');
    Route::controller('users', 'Admin\AdminUsersController');
    // admin dashboard
    Route::controller('/', 'Admin\AdminDashboardController');
});

/** ------------------------------------------
 *  Route model binding
 *  ------------------------------------------
 */
Route::model('user', 'Kidsit\User');

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
