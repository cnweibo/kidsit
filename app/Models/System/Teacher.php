<?php

namespace Kidsit\Models\System;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model {
	protected $fillable = [];
	public $table = "teachers";
	public function classes()
	{
		return $this->hasMany('Kidsit\Models\System\Classroom');
	}
}