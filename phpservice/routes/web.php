<?php

use Illuminate\Support\Facades\Route;

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

Route::get('email', 'EmailController@sendEmail');
Route::get('/downloadPdfImage', "ImagesController@downloadPdfImage");
Route::get('/streamPdfImage', "ImagesController@streamPdfImage");
Route::get('/savePdfImage', "ImagesController@savePdfImage");

