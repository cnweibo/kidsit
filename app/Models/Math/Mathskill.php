<?php

namespace Kidsit\Models\Math;

use Illuminate\Database\Eloquent\Model;

class Mathskill extends Model
{
	protected $fillable = [];
	public function category()
	{
		return $this->belongsTo('Kidsit\Models\Math\Mathskillcat','mathskillcat_id')->select(array('id', 'catlabel','description'));
	}
	public function score()
	{
		return $this->hasMany('Kidsit\Models\Math\Mathscore');
	}
	public function grades()
	{
		return $this->belongsToMany('Kidsit\Models\System\Grade');
	}
}