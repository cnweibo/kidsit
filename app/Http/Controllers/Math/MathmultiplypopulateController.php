<?php

namespace Kidsit\Http\Controllers\Math;

use Illuminate\Http\Request;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;
use Kidsit\Models\Math\Mathmultiply1;
use Exception;
class MathmultiplypopulateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
        public function index1()
        {

            
            for ($i=0;$i<81;$i++){
                $Multiply1row = new Mathmultiply1;
                $operand1 = rand(1,9);
                $operand2 = rand(1,9);
                $invisualcolumns = rand(1,3);
                $Multiply1row->invisualcolumns = $invisualcolumns;
                $Multiply1row->operand1 = $operand1;
                $Multiply1row->operand2 = $operand2;
                $Multiply1row->multiplydata = $operand1*$operand2;
                $Multiply1row->difficulty = 1;
                try {
                    $Multiply1row->save();
                } catch (Exception $e) { //注意一定要使用use Exception否则会出现无法catch这个异常的问题
                    echo 'Caught exception: ',  $e->getMessage(), "\n";
                }
                
            }
            return "done!";
        }
        
    }
