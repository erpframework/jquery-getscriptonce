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