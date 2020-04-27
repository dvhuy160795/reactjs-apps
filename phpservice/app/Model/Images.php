<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App;

class Images extends App\ModelBase
{
    protected $table = "tbl_images";

    public function saveImage($data)
    {
        $this->bindData($data);
        return $this->save();
    }
}
