<?php

namespace Kidsit;

use Illuminate\Database\Eloquent\Model;

class Relatedsentence extends Model
{
	protected $guarded = [];
	public $table = "relatedsentences";
	public function relatedwords(){
		return $this->belongsToMany('Relatedword');
	}
}