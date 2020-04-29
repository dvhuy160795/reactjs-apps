<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImagesForm extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'image_atl' => 'required',
            'image_is_use' => 'required',
            'image_src' => 'required',
            'image_title' => 'required',
        ];
    }
}
