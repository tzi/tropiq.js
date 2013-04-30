/*
 Social Bookmarks
 mlb.li
 */

;(function($){

    $.fn.popup = function() {
        var addEventListener = "addEventListener" in window
            , eventListener = addEventListener ? "addEventListener" : "attachEvent"
            , prefix = addEventListener ? "" : "on"
            , clickEvent = "createTouch" in document ? "touchend" : "click"

        this.each(function(){
            this[eventListener](prefix + clickEvent, function(event){
                event = event || window.event
                if("preventDefault" in event) event.preventDefault()
                else event.returnValue = false

                window.open(this.href, "", "width=640, height=280")
            });
        })
    }

})(window.jQuery||window.jTropiq)
