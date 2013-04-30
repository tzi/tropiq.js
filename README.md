jTropiq
=======

*Great vanilla grow in the tropiq*

jTropiq is a javascript library to make vanillaJS plugins available for jQuery.


jTropiq for plugin developer
-----------------------------

You like write vanillaJS ? mee too !

With jTropiq (~0.5kB) you can write plugin in vanillaJS and made it available for jQuery. 

```js
// Basic structure of a jTropiq plugin
;(function($){
  $.fn.myPlugin = function(options) {
    // One time vanilla code    
    this.each(function(index, element){
      // Vanilla code for every HTML elements
    })
  }
})(window.jQuery||window.jTropiq)
```


jTropiq for plugin user
-----------------------------

You like using jQuery plugin ? mee too !

If it is a jTropiq plugin you can use it either with jQuery (~32kB) or jTropiq (~0.5kB). 

```js
// Basic usage of a jTropiq plugin: you need to query elements in vanillaJS
$(document.querySelectorAll('.myWidgetClass')).myPlugin(options);
// If you use jQuery instead of jTropiq, you can use string selector
$('.myWidgetClass').myPlugin(options);
```

Author & Community
--------

jTropiq is under [MIT License](http://opensource.org/licenses/MIT).

It is created and maintained by [Thomas ZILLIOX](http://zilliox.me).  
