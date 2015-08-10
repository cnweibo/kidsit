<?php

namespace Kidsit\Models\System;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    protected $fillable = [];
    public function owner()
    {
        return $this->belongsTo('Teacher','teacher_id')->select(array('id', 'name','sysloginname'));
    }
    public function students()
    {
        return $this->hasMany('Student')->select(array('id','name','classroom_id'));
    }
}