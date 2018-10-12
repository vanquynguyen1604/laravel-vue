<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// User Routes
Route::group([
    'namespace' => 'User',
], function () {
    $this->get('/', function () { return view('user.index'); });

    $this->group(['namespace' => 'Auth'], function() {
        $this->get('login', 'LoginController@showLoginForm')->name('login');
        $this->post('login', 'LoginController@login')->name('user.login');
    });

    $this->middleware(['auth:web', 'middleware' => 'web'])->group(function () {
        Route::group(['prefix' => 'api'], function() {
            $this->group(['namespace' => 'Auth'], function() {
                $this->get('authenticate', 'LoginController@authenticate');
                $this->post('logout', 'LoginController@logout')->name('user.logout');
            });
        });
    });
});
