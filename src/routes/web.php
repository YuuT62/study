<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('test');
});

Route::get('/js_test', function(){
    return view('js_test');
});

Route::get('vue_test', function(){
    return view('vue_test');
});