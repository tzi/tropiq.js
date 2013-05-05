;(function($){
    $.fn.pages = function pages() {
        if (this.length>0 && this[0]) {
            var container = this[0];
            return new $.fn.pages.prototype.init(container);
        }
    }

    $.fn.pages.prototype = {
        'init': function init(container){
            this.element = container;
            this.current = 0;
            var elements = container.children,
              length = elements.length;
            for (;length--;) {
                if (elements[length].tagName) {
                    if (length != this.current) {
                        elements[length].style.display = 'none';
                    }
                } else {
                    container.removeChild(elements[length]);
                }
            }
        },
        'moveTo': function moveTo(index){
            this.current = index;
            var elements = this.element.children,
              length = elements.length;
            for (;length--;) {
                if (length == index) {
                    elements[length].style.display = 'block';
                } else {
                    elements[length].style.display = 'none';
                }
            }
            scroll(0,0);
        },
        'next': function next() {
            if (this.current<this.element.children.length-1) {
                this.moveTo(this.current+1);
            }
        },
        'prev': function prev() {
            if (this.current>0) {
                this.moveTo(this.current-1);
            }
        }
    }

    $.fn.pages.prototype.constructor = $.fn.pages;
    $.fn.pages.prototype.init.prototype = $.fn.pages.prototype;
})(window.jQuery||window.jTropiq)