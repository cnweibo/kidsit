<?php

namespace Kidsit;

use Illuminate\Database\Eloquent\Model;

class Guestaddedword extends Model
{
    protected $guarded = array();

    public static $rules = array();
    public function getapprovedAttribute($value){
    	return ($value ? "是" : "否");
    }
}