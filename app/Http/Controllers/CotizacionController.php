<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CotizacionController extends Controller
{
    function index(Request $request)
    {

    }

    function store(Request $request)
    {
    	// dd($request->all());
    	$nombre = $request->nombre;
    	$file_json = file_get_contents(public_path('JSON-COTIZACION'));
    	$res_json = json_decode($file_json);

    	return view('cotizacion', compact('res_json', 'nombre'));

    }
}
