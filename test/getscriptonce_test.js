/*!
 * jQuery getScriptOnce Plugin Test Suite
 * https://github.com/invetek/jquery-getscriptonce
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

(function($) {
    /*
     *  Initialize QUnit
     * 
     */
    QUnit.begin(function() {
        $.fx.off = true;
    });

    /*
     *  Standard jQuery plugin tests
     * 
     */
    module("Standard jQuery plugin tests");
    test("return value", function() {
        expect(1);

        ok($.formHelp() === undefined);

    });

    /*
     *  Plugin specific tests
     * 
     */
    module("");
    test("", function() {

    });

})(jQuery);





