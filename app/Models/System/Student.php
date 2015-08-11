<?php

namespace Kidsit\Models\System;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
	protected $fillable = [];
	public function belongingclass()
	{
		return $this->belongsTo('Kidsit\Models\System\Classroom','classroom_id')->select('id','sysname');
	}
	public function mathscore()
	{
		return $this->hasMany('Mathscore');
	}
}