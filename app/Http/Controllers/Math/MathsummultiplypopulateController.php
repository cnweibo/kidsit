<?php

namespace Kidsit\Http\Controllers\Math;

use Illuminate\Http\Request;

use Kidsit\Http\Requests;
use Kidsit\Http\Controllers\Controller;
use Kidsit\Models\Math\Mathsummultiply;
use Exception;
class MathsummultiplypopulateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index1()
    {

        
        for ($i=0;$i<729;$i++){
            $Summultiplyrow = new Mathsummultiply;
            $operand1 = rand(1,9);
            $operand2 = rand(1,9);
            $operand3 = rand(1,9);
            $operator1index = rand(0,1);
            $operator1 = $operator1index;
            $operator2 = 1-$operator1index;
            $invisualcolumns = rand(1,4);
            $Summultiplyrow->invisualcolumns = $invisualcolumns;
            $Summultiplyrow->operand1 = $operand1;
            $Summultiplyrow->operand2 = $operand2;
            $Summultiplyrow->operand3 = $operand3;
            $Summultiplyrow->operator1 = $operator1;
            $Summultiplyrow->operator2 = $operator2;

            if ($operator1 == 0){
                $Summultiplyrow->result = $operand1 + $operand2*$operand3;
            }
            else{
                $Summultiplyrow->result = $operand1 * $operand2+$operand3;
            }
            $Summultiplyrow->difficulty = 1;
            try {
                $Summultiplyrow->save();
            } catch (Exception $e) {
                echo 'Caught exception: ',  $e->getMessage(), "\n";
            }
            
        }
        return "done!";
    }
    
}
