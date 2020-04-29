<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnTblImages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tbl_images', function (Blueprint $table) {
            $table->string('image_extension')->nullable();
            $table->string('image_name')->nullable();
            $table->string('image_size')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_images', function (Blueprint $table) {
            $table->dropColumn(['image_extension']);
            $table->dropColumn(['image_name']);
            $table->dropColumn(['image_size']);
        });
    }
}
