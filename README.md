jQuery-getScriptOnce
=================

A jQuery plugin that prevents a script being loaded more then once via $.getScript()

##Why this plugin?

Sometimes you simply don't want a script to appear on your website twice or more.

##Installing
Grab the file tree from dist/ in the repository
and make sure you insert the following lines in you HTML document. Insert
jquery.getscriptone.js _after_ the jQuery script:

```html
<script src="jquery.getscriptone.js"></script>
```

##Usage

```javascript
$.getScriptOnce('/myscript.js');
```
The plugin is a wrapper around jQuery's $.getScript() but it keeps track of the scripts
that have been loaded before on the website. 

It returns a jqXHR object when the script is loaded for the first time. It returns false when
you try to load a script that is already loaded.

##Example

Check out this [live](http://www.invetek.nl/samples/getscriptonce) sample (and its [source](sample)).
