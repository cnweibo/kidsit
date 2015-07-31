<?php

namespace Kidsit\Models\System;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
	protected $fillable = [];
	public function mathskills()
	{
		return $this->belongsToMany('Mathskill');
	}
}