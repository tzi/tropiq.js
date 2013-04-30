jTropiq
=======

*Great vanilla grow in the tropiq*

jTropiq is a fork of jQuery, but only the plugin system was kept.  
It allows to make vanillaJS plugins available for the jQuery community.


Why develop a jTropiq plugin ?
--------

You like to write vanillaJS ? mee too !  
With jTropiq (~0.5kB) you can write a plugin in vanillaJS and made it also working with jQuery.  
And by doing so, your users will know easily how to use your plugins.

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


How to use a jTropiq plugin ?
--------

You like using the jQuery plugins ? mee too !  
If it is a jTropiq plugin you can use it either with jQuery (~32kB) or jTropiq (~0.5kB). 

### With jTropiq
```html
<script src="path/to/jtropiq.js"></script>
<script src="path/to/myPlugin-jtropiq.js"></script>
<script>
  // Basic usage of a jTropiq plugin: you need to query elements in vanillaJS
  $(document.querySelectorAll('.myWidgetClass')).myPlugin(options);
</script>
```

### With jQuery
```html
<script src="path/to/jquery.js"></script>
<script src="path/to/myPlugin-jtropiq.js"></script>
<script>
  // You can query elements in vanillaJS or use string selector
  $('.myWidgetClass').myPlugin(options);
</script>
```


Author & Community
--------

jTropiq is under [MIT License](http://opensource.org/licenses/MIT).

It is created and maintained by [Thomas ZILLIOX](http://zilliox.me).  
