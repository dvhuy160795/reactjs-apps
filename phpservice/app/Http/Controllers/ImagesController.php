<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests;
use Barryvdh\DomPDF\Facade as PDF;
use ZipArchive;

class ImagesController extends Controller
{
    public function getImages()
    {
        $images = new Model\Images();
        $res = [
            "body" => $images->prepareImages($images::all()),
        ];
        return response()->json($res);
    }

    public function searchImages(Request $request, $textSearch = "")
    {
        $images = new Model\Images();
        $res = [
            "body" => $images->searchImages($textSearch),
        ];
        return response()->json($res);
    }

    public function saveImage(Request $request)
    {
        $images = new Model\Images();
        $dataForm = $request->all();
        $validator = Validator::make($dataForm, [
            'image_title' => 'bail|required|max:40',
            'image_atl' => 'bail|required|max:255',
            'image.name' => 'bail|required|max:255',
            'image.size' => 'numeric|max:5242880',
            'image.content' => 'is_image',
            'image_is_use' => 'required|max:255',
        ], [
            'image_title.required' => 'Title is required!',
            'image_title.max' => 'Title is max!',
            'image_atl.required' => 'Atl is required!',
            'image_atl.max' => 'Atl is max!',
            'image.name.required' => 'File is required!',
            'image.name.max' => 'File is max!',
            'image.size.max' => 'File size is max!',
            'image.content.is_image' => 'File is not image!'
        ]);

        if (!$validator->passes()) {
            $rawMessagesValdate = $validator->getMessageBag()->getMessages();
            $messages = [];
            foreach ($dataForm as $field => $value) {
                foreach ($rawMessagesValdate[$field] ?? [] as $message) {
                    $messages[$field][] = $message;
                }
            }
            return response()->json($rawMessagesValdate,402);
        }
        $image = $images->buildData($dataForm);
        $isSuccess = $images->saveImage($image);
        if ($isSuccess) {
            $image['image_src'] = $images->getFileContent($image['image_src']);
            return response()->json($image);
        }
        return response()->json($isSuccess);
    }

    public function viewImage(Request $request) {

    }

    public function deleteImage(Request $request) {
        $idImage = $request->input("image_id");
        $isSuccess = Model\Images::where('id', $idImage)->delete();
        return response()->json($isSuccess);
    }

    public function downloadPdfImage() {
        $images = new Model\Images();
        $pdf = PDF::loadView('myPDF', ["data" => $images->prepareImages($images::all())]);
        return $pdf->download('itsolutionstuff.pdf');
    }

    public function streamPdfImage() {
        $images = new Model\Images();
        $pdf = PDF::loadView('myPDF', ["data" => $images->prepareImages($images::all())]);
        return $pdf->stream('itsolutionstuff.pdf');
    }

    public function savePdfImage() {
        $images = new Model\Images();
        $pdf = PDF::loadView('myPDF', ["data" => $images->prepareImages($images::all())]);
        if (!file_exists(storage_path('app/public')."/pdf")) {
            mkdir(storage_path('app/public')."/pdf", 0775);
        }
        $pdf->save(storage_path('app/public')."/pdf/itsolutionstuff.pdf");
        return 1;
    }
}
