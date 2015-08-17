<?php

namespace Kidsit\Http\Controllers\Admin\Math;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;

class AdminMathIndexController extends Controller
{

    /**
     * Display the index frontend page for angular
     *
     * @return Response
     */
    public function indexpage()
    {
        $title = "数学知识点类别管理";
        return View::make('admin.math.indexpage',compact('title'));
    }

}