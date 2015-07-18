<?php

namespace Kidsit;

use Illuminate\Database\Eloquent\Model;

class Yinbiaocategory extends Model
{
	protected $guarded = [];
	public $table = "yinbiaocategories";
	public function yinbiao(){
		return $this->hasMany('Kidsit\Yinbiao');
	}
}