<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ModelBase extends Model
{
    protected function bindData($data)
    {
        foreach ($data as $field => $value){
            $this->{$field} = $value;
        }
        return $this;
    }
}
