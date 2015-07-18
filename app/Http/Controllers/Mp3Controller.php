<?php

namespace Kidsit\Http\Controllers;

use Illuminate\Http\Request;
use Log;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;

use Carbon\Carbon;
class Mp3Controller extends Controller
{
    public function getMp3($mp3)
	{
		Log::info('caught here by ajax'. Carbon::now());
		$absolutefilename = app_path().'/../storage/uploaded/yinbiaomp3/'.$mp3;
		return \Response::download($absolutefilename)->setTtl(300)->setContentDisposition('inline');
		// return (File::get($absolutefilename));
	}
}
