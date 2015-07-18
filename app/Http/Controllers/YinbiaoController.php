<?php

namespace Kidsit\Http\Controllers;

use Illuminate\Http\Request;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;

use Kidsit\Yinbiao;
use JavaScript;

class YinbiaoController extends Controller
{

    /**
     * Yinbiao Model
     * @var Yinbiao
     */
    protected $yinbiao;
    /**
     * Inject the models.
     * @param Yinbiao $yinbiao
     */
    public function __construct()
    {
        // parent::__construct();

        // $this->post = $post;
        // $this->user = $user;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // Get all the yinbiao with eager loading 
        // instead of N+1 performance issue  
        // $yinbiaos = Yinbiao::all();
        $yinbiaos = Yinbiao::with('yinbiaocategory','fayinguizes')->get();
        return View::make('site.yinbiao.index',compact('yinbiaos'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function getWordlist()
    {
        // Get all the yinbiao with eager loading 
        // instead of N+1 performance issue  
        // $yinbiaos = Yinbiao::all();
        // $wordslist = Yinbiao::with('yinbiaocategory','fayinguizes')->get();
        dd(Fayinguize::find(Input::get('fayinguizeid'))->relatedwords);
        return View::make('site.yinbiao.index',compact('yinbiaos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        
        $yinbiao = Yinbiao::with('yinbiaocategory','fayinguizes')->findOrFail($id);
        $ppatternCount = (string)($yinbiao->fayinguizes->count()) ;
        Javascript::put(['ppatternregexcount'=>$ppatternCount]);
        // Give::javascript(['csrf_token'=> csrf_token()]);
        // $words=[]; 
        // foreach ( Fayinguize::find(4)->relatedwords->toArray() as $relateword) {
        //  array_push($words,'#wd_'.$relateword["id"]);
        // }        
        return view('site.yinbiao.show',compact('yinbiao'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

}
