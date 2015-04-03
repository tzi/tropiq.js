
// tropiq.js could be used as a function or as a constructor
function tropiq( elements ) {
    // But a function could not return an instantiation of himself without make an infinite loop
    return new tropiq.fn.init( elements );
}

// Definition of the tropiq object
tropiq.fn = tropiq.prototype = {
    init: function( elements ) {
        this.length = 0;
        if ( elements ) {
            if ( elements.nodeType ) {
                this[this.length++] = elements;
            } else if ( typeof elements == 'string') {
              this.init(document.querySelectorAll(elements));
            } else if ( elements.length ) {
                var i = 0,
                    length = elements.length;
                for (; i<length; i++) {
                    this[this.length++] = elements[i];
                }
            }
        }
    },
    toArray: function( ) {
        return Array.prototype.slice.call(this);
    },
    each: function( callback ) {
        var i = 0,
            length = this.length;
        for (; i<length; i++) {
            callback.call( this[ i ], i, this[ i ] );
        }
        return this;
    }
}

// Simulate that a tropiq.fn.init object is like a tropiq object
tropiq.fn.constructor = tropiq;
tropiq.fn.init.prototype = tropiq.fn;

// tropiq will become the $ only if it is available
if (!window.$) {
    window.$ = tropiq;
}