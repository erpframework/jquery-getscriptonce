/*! jQuery getScriptOnce - v0.1.0 - 2013-11-15
* http://www.invetek.nl/?p=105
* https://github.com/invetek/jquery-getscriptonce
* Copyright (c) 2013 Loran Kloeze | Invetek
* Licensed MIT 
*/

(function($) {
    $.getScriptOnce = function(url, successhandler) {
         if ($.getScriptOnce.loaded.indexOf(url) === -1) {
            $.getScriptOnce.loaded.push(url); 
            if (successhandler === undefined) {
                return $.getScript(url);
            } else {
                return $.getScript(url, function(script, textStatus, jqXHR) {
                    successhandler(script, textStatus, jqXHR);
                });
            }
       } else {
           return false;
       }

    };

    $.getScriptOnce.loaded = [];

}(jQuery));