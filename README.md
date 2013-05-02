jTropiq
=======

jTropiq is the jQuery plugin system, without jQuery.


Why jTropiq
--------

* The jTropiq size is ~0.5kB while jQuery is ~32kB.
* To promote vanillaJS
* To provide plugins with an expectable usage


To develop jTropiq plugins
--------

### Why should you develop jTropiq plugins?

You like to write vanillaJS? mee too!<br>
By packaging your plugins for jTropiq, you will provide vanillaJS plugins compatible with jQuery.<br>
And by doing so, your users will know easily how to use your plugins.

### How can you develop jTropiq plugins?

By following the following pattern

```js
// Basic structure of a jTropiq plugin
;(function($){
  $.fn.myPlugin = function(options) {
    // One time vanilla code    
    this.each(function(index, element){
      // Vanilla code for every HTML elements
    })
  }
  return this;
})(window.jQuery||window.jTropiq)
```


How to use a jTropiq plugin?
--------

You like to use a jQuery plugins? mee too!<br>
If it is a jTropiq plugin you can use it either with jQuery or with jTropiq.<br>
Don't be afraid of jTropiq plugins, it is not harder than jQuery.

### With jTropiq
```html
<script src="path/to/jtropiq.js"></script>
<script src="path/to/myPlugin-jtropiq.js"></script>
<script>

  // Basic usage of a jTropiq plugin: you need to query elements with vanillaJS
  $(document.getElementById('#widgetId')).myPlugin(options);
  $(document.getElementsByClassName('myWidgetClass')).myPlugin(options);
  $(document.querySelectorAll('.myWidgetClass')).myPlugin(options);

  // String selector is an alias of "document.querySelectorAll", be aware of his IE8+ compatibility
  $('.myWidgetClass').myPlugin(options);
</script>
```

### With jQuery
```html
<script src="path/to/jquery.js"></script>
<script src="path/to/myPlugin-jtropiq.js"></script>
<script>
  // You can query elements with vanillaJS or with jQuery selector
  $(document.getElementById('#widgetId')).myPlugin(options);
  $('.myWidgetClass').myPlugin(options);
</script>
```


Author & Community
--------

jTropiq is under [MIT License](http://opensource.org/licenses/MIT).

It is created and maintained by [Thomas ZILLIOX](http://zilliox.me).  
