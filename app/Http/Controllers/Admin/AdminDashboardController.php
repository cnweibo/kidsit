<?php

namespace Kidsit\Http\Controllers\Admin;

use Illuminate\Http\Request;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
class AdminDashboardController extends Controller
{
    public function getIndex()
    {
        return View::make('admin/dashboard');
    }
}