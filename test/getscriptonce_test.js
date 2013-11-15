/*!
 * jQuery getScriptOnce Plugin Test Suite
 * https://github.com/invetek/jquery-getscriptonce
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

(function($) {
    var scriptLocation = 'http://www.invetek.nl/samples/getscriptonce/loadthis.js';

    /*
     *  Helper functions
     * 
     */
    function timesScriptIsLoaded() {
        return $('#qunit-fixture .loadedscript').length;
    }

    /*
     *  Initialize QUnit
     * 
     */
    QUnit.begin(function() {
        $.fx.off = true;
    });

    QUnit.testDone(function() {
        //Clean loaded scripts array
        $.getScriptOnce.loaded = [];
    });

    /*
     *  Standard jQuery plugin tests
     * 
     */
    module("Standard jQuery plugin tests");
    asyncTest("return value", 1, function() {
        ok(typeof $.getScriptOnce(scriptLocation, function() {
            start();
        }) === 'object');
    });

    /*
     *  Plugin specific tests
     * 
     */
    module("Plugin specific tests");
    asyncTest("get a script once", 1, function() {
        $.getScriptOnce(scriptLocation, function() {
            equal(timesScriptIsLoaded(), 1, 'Script loads once');
            start();
        });
    });

    asyncTest("get a script with done handler", 1, function() {
        $.getScriptOnce(scriptLocation).done(function() {
            equal(timesScriptIsLoaded(), 1, 'Script loads once');
            start();
        });
    });

    asyncTest("get a script with fail handler", 1, function() {
        $.getScriptOnce('nonexistingscript').fail(function() {
            ok(true, 'Script doesn\'t load');
            start();
        });
    });

    asyncTest("get a script twice with success handler", 3, function() {
        $.getScriptOnce(scriptLocation, function() {
            equal(timesScriptIsLoaded(), 1, 'Script loads once');

            equal($.getScriptOnce(scriptLocation), false, 'Returns false when loading script again');

            equal(timesScriptIsLoaded(), 1, 'Script should not more than once');

            start();
        });

    });

    asyncTest("check arguments with success handler", 3, function() {
        $.getScriptOnce(scriptLocation, function(script, textStatus, jqXHR) {
            equal(script, undefined, 'Argument \'script\' is correct ');
            equal(textStatus, 'success', 'Argument \'textStatus\' is correct ');
            ok(typeof jqXHR === 'object', 'Argument \'jqXHR\' is correct ');
            start();
        });

    });

    asyncTest("get a script twice with done handler", 3, function() {
        $.getScriptOnce(scriptLocation).done(function() {
            equal(timesScriptIsLoaded(), 1, 'Script loads once');

            equal($.getScriptOnce(scriptLocation), false, 'Returns false when loading script again');

            equal(timesScriptIsLoaded(), 1, 'Script should not more than once');

            start();

        });

    });

    asyncTest("check arguments with done handler", 2, function() {
        $.getScriptOnce(scriptLocation).done(function(script, textStatus) {
            equal(script, undefined, 'Argument \'script\' is correct ');
            equal(textStatus, 'success', 'Argument \'textStatus\' is correct ');
            start();
        });

    });
    
    asyncTest("get a script 500 times", 2, function() {
        var semaphore = 0;
        var successhandler = function(){
                semaphore--;
                equal(i, 500);
                equal(timesScriptIsLoaded(), 1, 'Script loads once');
                start();
            };
            
        for (var i=0;i<500;i++){
            $.getScriptOnce(scriptLocation, successhandler);
        }
        
        
    });


})(jQuery);





