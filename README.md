tropiq.js
=======

tropiq.js is the jQuery plugin system, without jQuery.


Why tropiq.js
--------

* The tropiq.js size is ~0.5kB while jQuery is ~32kB.
* To promote vanillaJS
* To provide plugins with an expectable usage


To develop tropiq.js plugins
--------

### Why should you develop tropiq.js plugins?

You like to write vanillaJS? mee too!<br>
By packaging your plugins for tropiq.js, you will provide vanillaJS plugins compatible with jQuery.<br>
And by doing so, your users will know easily how to use your plugins.

### How can you develop tropiq.js plugins?

By following the following pattern

```js
// Basic structure of a tropiq.js plugin
;(function($){
  $.fn.myPlugin = function(options) {
    // One time vanilla code    
    this.each(function(index, element){
      // Vanilla code for every HTML elements
    })
  }
  return this;
})(window.jQuery||window.tropiq)
```


How to use a tropiq.js plugin?
--------

You like to use a jQuery plugins? mee too!<br>
If it is a tropiq.js plugin you can use it either with jQuery or with tropiq.js.<br>
Don't be afraid of tropiq.js plugins, it is not harder than jQuery.

### With tropiq.js
```html
<script src="path/to/tropiq.js"></script>
<script src="path/to/tropiq-my-plugin.js"></script>
<script>

  // Basic usage of a tropiq.js plugin: you need to query elements with vanillaJS
  $(document.getElementById('#widgetId')).myPlugin(options);
  $(document.getElementsByClassName('myWidgetClass')).myPlugin(options);
  $(document.querySelectorAll('.myWidgetClass')).myPlugin(options);

  // String selector is an alias of "document.querySelectorAll", be aware of the IE8+ compatibility
  $('.myWidgetClass').myPlugin(options);
</script>
```

### With jQuery
```html
<script src="path/to/jquery.js"></script>
<script src="path/to/tropiq-my-plugin.js"></script>
<script>
  // You can query elements with vanillaJS or with jQuery selector
  $(document.getElementById('#widgetId')).myPlugin(options);
  $('.myWidgetClass').myPlugin(options);
</script>
```


Author & Community
--------

tropiq.js is under [MIT License](http://opensource.org/licenses/MIT).

It is created and maintained by [Thomas ZILLIOX](http://zilliox.me).  
