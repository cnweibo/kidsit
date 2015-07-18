<?php

namespace Kidsit;

use Illuminate\Database\Eloquent\Model;

class Fayinguize extends Model
{
	protected $guarded = [];
	public $table = "fayinguizes";
	public function relatedwords(){
		return $this->belongsToMany('Kidsit\Relatedword');
	}
	public function yinbiao(){
		return $this->belongsTo('Kidsit\Yinbiao');
	}	
}