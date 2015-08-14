<?php

namespace Kidsit\Models\Math;

use Illuminate\Database\Eloquent\Model;

class Mathskillcat extends Model
{
	protected $fillable = [];
	public $table = "mathskillcats";
	public function skills()
	{
		return $this->hasMany('Mathskill');
	}
}