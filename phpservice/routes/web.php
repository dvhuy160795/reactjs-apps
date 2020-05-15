<?php

use Barryvdh\DomPDF\Facade as PDF;
use App\Model;

use App\Article;
use App\Model\Images;
use Illuminate\Support\Facades\Route;

use Elasticsearch\ClientBuilder;

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
Route::get('/', function () {
    $client = ClientBuilder::create()->build();
    $params = [
        'index' => 'huy',
        'type' => '_doc',
        'id'    => '1',
        'body'  => [ 'testField' => 'abc']
    ];
    $response = $client->index($params);
    $response = $client->exists([
            'index' => 'huy',
            'type' => '_doc',
            'id' => 1
        ]
    );
    return view('welcome');
});
Route::get('/search', function() {
    $images = Images::searchByQuery(['match' => ['image_title' => 'Title']]);
    return $images;
});
Route::get('email', 'EmailController@sendEmail');
Route::get('/downloadPdfImage', "ImagesController@downloadPdfImage");
Route::get('/streamPdfImage', "ImagesController@streamPdfImage");
Route::get('/savePdfImage', "ImagesController@savePdfImage");
Route::get('/viewPDF', function () {
    $images = new Model\Images();

    Model\Images::createIndex($shards = null, $replicas = null);
    $pdf = PDF::loadView('myPDF', ["data" => $images->prepareImages($images::all())]);
    return view('myPDF',["data" => $images->prepareImages($images::all())]);
});

