<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Model;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix("images")->group(function () {
    Route::get('/getImages', "ImagesController@getImages");
    Route::post('/saveImage', "ImagesController@saveImage");
    Route::delete('/deleteImage', "ImagesController@deleteImage");
    Route::post('/uploadFile', "ImagesController@uploadFile");
    Route::get('/viewImage', "ImagesController@viewImage");
});

