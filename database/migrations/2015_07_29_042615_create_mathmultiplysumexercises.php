<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMathmultiplysumexercises extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mathmultiplysum1exercises', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('operand1');
            $table->integer('operand2');
            $table->integer('operand3');
            $table->unique(['operand1','operand2','operand3']);
            $table->integer('operator1');
            $table->integer('operator2');
            $table->integer('result');
            $table->string('difficulty');
            $table->string('invisualcolumns')->default('4');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('mathmultiplysum1exercises');
    }

}