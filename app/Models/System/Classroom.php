<?php

namespace Kidsit\Models\System;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    protected $fillable = [];
    public function owner()
    {
        return $this->belongsTo('Kidsit\Models\System\Teacher','teacher_id')->select(array('id', 'name','sysloginname'));
    }
    public function students()
    {
        return $this->hasMany('Kidsit\Models\System\Student')->select(array('id','name','classroom_id'));
    }
}