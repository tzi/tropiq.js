;(function($){

    $.fn.popup = function() {
        this.each(function(){
            this.addEventListener('click', function(event){
                event.preventDefault();
                window.open(this.href, "", "width=640, height=280")
            });
        });
        return this;
    }

})(window.jQuery||window.tropiq);
