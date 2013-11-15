/*!
 * jQuery getScriptOnce Plugin Sample
 * https://github.com/invetek/jquery-formhelp
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

$(document).ready(function() {
    
    $('#btnGetMultiple').on('click', function(){
        $.getScript('http://www.invetek.nl/samples/getscriptonce/getmultiple.js');
    });
    
    $('#btnGetOnce').on('click', function(){
        $.getScriptOnce('http://www.invetek.nl/samples/getscriptonce/getonce.js');
    });
});