/**
 * Created by jinja on 5.10.2017 г..
 */
var app = app || {};

(function (scope) {

    function Engine(){
        this.lastScrollTop = 0;
    }

    Engine.prototype._scrollEventListener = function () {

        $(window).scroll(function(event){
            var st = $(this).scrollTop();
            if (st > self.lastScrollTop){
                $.publish("move-right")
            } else {
                $.publish("move-left")
            }
            self.lastScrollTop = st;
        });
    };

    Engine.prototype.initialize = function () {
        this._scrollEventListener();
    };

    scope.Engine = Engine;

})(app);