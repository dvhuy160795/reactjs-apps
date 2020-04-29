<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests;

class ImagesController extends Controller
{
    public function getImages()
    {
        $images = new Model\Images();
        $res = [
            "body" => $images::all(),
        ];
        return response()->json($res);
    }

    public function saveImage(Request $request)
    {
        $images = new Model\Images();
        $dataForm = $request->all();
        return response()->json($images->saveImage($images->buildData($dataForm)));
//        $validator = Validator::make($dataForm, [
//            'image_title' => 'bail|required|max:40',
//            'image_atl' => 'bail|required|max:255',
//            'image_src' => 'bail|required|max:255',
//            'image_is_use' => 'bail|required|max:255',
//        ], [
//            'image_title.required' => 'image_title.required',
//            'image_title.max' => 'image_title.max',
//            'image_atl.required' => 'image_atl.required',
//            'image_atl.max' => 'image_atl.max',
//            'image_src.required' => 'image_src.required',
//            'image_src.max' => 'image_src.max',
//            'image_is_use.required' => 'image_is_use.required',
//        ]);
//
//        if (!$validator->passes()) {
//            $rawMessagesValdate = $validator->getMessageBag()->getMessages();
//            $messages = [];
//            foreach ($dataForm as $field => $value) {
//                foreach ($rawMessagesValdate[$field] ?? [] as $message) {
//                    $messages[$field][] = $message;
//                }
//            }
//            return response()->json($messages,404);
//        }

        $isSuccess = $images->saveImage(json_decode(json_encode($request->all())));
        return response()->json($isSuccess);
    }

    public function uploadFile(Request $request) {
        return response()->json([]);
    }
}
