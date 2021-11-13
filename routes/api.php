<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// CONSULTA
Route::post('getData', 'App\Http\Controllers\Estudiantes@getData');

// REGISTRO
Route::post('setData', 'App\Http\Controllers\Estudiantes@setData');

// EDITAR
Route::post('getDataEdit', 'App\Http\Controllers\Estudiantes@getDataEdit');

// ELIMINAR
Route::post('setDataDel', 'App\Http\Controllers\Estudiantes@setDataDel');