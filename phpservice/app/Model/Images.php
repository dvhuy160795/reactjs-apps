<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use App;
use Illuminate\Support\Facades\Log;
use Elasticquent\ElasticquentTrait;
use Elasticsearch\ClientBuilder;

class Images extends App\ModelBase
{
    use ElasticquentTrait;
//
    protected $fillable = [
        'image_title',
        'image_title',
        "image_atl",
        "image_is_use",
        "image_src",
        "image_extension",
        "image_name",
        "image_size"
    ];

    protected $mappingProperties = [
        'image_title' => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ],
        "image_atl" => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ],
        "image_is_use" => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ],
        "image_src" => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ],
        "image_extension" => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ],
        "image_name" => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ],
        "image_size" => [
            'type' => '_doc',
            'analyzer' => 'standard',
        ]
    ];
    protected $table = "tbl_images";

    public function saveImage($data)
    {
        $this->bindData($data);
        $isOk = $this->save();
        self::addAllToIndex();
        return $isOk;
    }

    public function saveFileToPath($dataImage)
    {
        $fileName = base64_encode($dataImage['name']).strtotime("now");
        $dir = "Gallery";
        Storage::disk('public')->makeDirectory($dir);
        Storage::disk('public')->put($dir."/".$fileName, $dataImage['content']);
        $imageExtension = explode(".",$dataImage['name'])[count(explode(",",$dataImage['name'])) - 1];
        return [
            "image_src" => storage_path('app/public')."/".$dir."/".$fileName,
            "image_extension" => $imageExtension,
            "image_name" => $fileName,
            "image_size" => $dataImage['size']
        ];
    }

    public function buildData($data)
    {
        $dataImage = $this->saveFileToPath($data['image']);
        $result = [
            "image_atl" => $data['image_atl'],
            "image_title" => $data['image_title'],
            "image_is_use" => $data['image_is_use'],
            "image_src" => $dataImage['image_src'],
            "image_extension" => $dataImage['image_extension'],
            "image_name" => $dataImage['image_name'],
            "image_size" => $dataImage['image_size']
        ];
        return $result;
    }

    public function getFileContent($path)
    {
        if (file_exists($path)) {
            return file_get_contents($path);
        }
        return "";
    }

    public function prepareImages($images)
    {
        $instance = $this;
        $images = array_map(function ($image) use ($instance) {
            $image['image_src'] = $instance->getFileContent($image['image_src']);
            return $image;
        }, json_decode(json_encode($images),true));
        return $images;
    }

    public function searchImages($textSearch)
    {
        Log::info(self::where("image_title","like","%".$textSearch."%")->toSql().",%$textSearch%");
        $images = self::where("image_title","like","%".$textSearch."%")->get();
        $images = self::searchByQuery(['wildcard' => [
            'image_alt' => "A*"
        ]]);

        return $this->prepareImages($images);
    }
}
