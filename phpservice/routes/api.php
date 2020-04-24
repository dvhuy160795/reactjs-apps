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
Route::prefix("Images")->group(function () {
    Route::get('/getImages', function (Request $request) {
        $images = new Model\Images();
        return $images::all();
    });

    Route::post('/saveImage', function (Request $request) {
        $images = new Model\Images();
        dd($request->all());
        return response("aaaaaaaaa");
    });
});

