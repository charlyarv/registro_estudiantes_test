<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Estudiante;
use Illuminate\Support\Facades\DB;

class Estudiantes extends Controller{
    public function getData(Request $request){

        $filtro = $request->get('filtro');

        if($filtro == '' or $filtro == '0'){
            return response()->json([
                'count'=>Estudiante::count(),
                'data'=>Estudiante::select(
                    '*'
                )
                ->orderBy('estatus')
                ->orderBy('grado_escolar')
                ->get()
            ],200);
        }
        else{
            return response()->json([
                'count'=>Estudiante::count(),
                'data'=>Estudiante::select(
                    '*'
                )
                ->where([
                    ['grado_escolar', $filtro]
                ])
                ->orderBy('estatus')
                ->orderBy('grado_escolar')
                ->get()
            ],200);
        }

        
    }

    public function setData(Request $request){
        $return = Estudiante::updateOrCreate(array('folio_id'=>$request->get('folio_id')),$request->all());
        $idRegistrado = $return->folio_id;

        return response()->json([
            'data'=>array(
                'idRegistrado' => $idRegistrado
                )
        ],200);
    }

    public function getDataEdit(Request $request){
        return response()->json([
            'data'=>Estudiante::select(
                '*'
            )
            ->where([
                ["matricula",$request->get('matricula')]
            ])
            ->get()
        ],200);
    }

    public function setDataDel(Request $request){
        
        $return = Estudiante::updateOrCreate(array('folio_id'=>$request->get('folio_id')),$request->all());
        $idRegistrado = $return->folio_id;

        return response()->json([
            'data'=>array(
                'idRegistrado' => $idRegistrado
                )
        ],200);
    }
}