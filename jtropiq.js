
// jTropiq could be used as a function or as a constructor
function jTropiq( elements ) {
    // But a function could not return an instantiation of himself without make an infinite loop
    return new jTropiq.fn.init( elements );
}

// Definition of the jTropiq object
jTropiq.fn = jTropiq.prototype = {
    init: function( elements ) {
        this.length = 0;
        if ( elements ) {
            if ( elements.nodeType ) {
                this[this.length++] = elements;
            }
            else if ( elements.length ) {
                var i = 0,
                    length = elements.length;
                for (; i<length; i++) {
                    this[this.length++] = elements[i];
                }
            }
        }
    },
    toArray: function( ) {
        return [].slice(this);
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

// Simulate that a jTropiq.fn.init object is like a jTropiq object
jTropiq.fn.constructor = jTropiq;
jTropiq.fn.init.prototype = jTropiq.fn;

// jTropiq will become the $ only if it is available
if (!window.$) {
    window.$ = jTropiq;
}