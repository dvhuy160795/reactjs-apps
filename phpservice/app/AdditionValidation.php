<?php

namespace App;

use Illuminate\Support\Facades\Validator;

class AdditionValidation
{
    public function appendCustomizeValidater() :void
    {
        Validator::extend('is_image', function($attribute, $value, $parameters, $validator)
        {
            $value = explode(";",$value)[0];
            $value = explode(":",$value)[1];
            $typeImages = [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/gif",
            ];
            return in_array($value,$typeImages);
        });
    }
}

