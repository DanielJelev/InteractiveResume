/**
 * Created by jinja on 2.10.2017 г..
 */
var app = app || {};

(function (scope) {

    function Character(container){
        this.container = container;
        this.moveInterval = null;
        this.step = 0;
        this.spriteStep = 0;
    }

    Character.prototype.processMove = function(x){
        var self = this;
        $(document).keydown(function(e) {
            if (!self.key) {
                self.setKey(e.keyCode);
                switch(e.keyCode) {
                    case 39: self.move('right');  break;
                    case 37: self.move('left');  break;
                }
            }
        });

    };

    Character.prototype.move = function(direction){
        var self = this;
        if(direction === 'right'){
            this.moveInterval = setInterval(function(){
                console.log("right")
                self.draw(direction);
            }, 50)
        }
        if(direction === 'left'){
            this.moveInterval = setInterval(function(){
                console.log("left")
                self.draw(direction);
            }, 50)
        }
    };

    Character.prototype.draw = function(direction){
        var self = this;
        if(direction === 'right'){
            this.container.removeClass("left-side");
            this.container.addClass("right-side");
            this.container.css("left", self.step);
            this.container.css("background-position", self.spriteStep+"px");
            this.step +=10;
            this.spriteStep -= 65;
            if(this.spriteStep < -520){
                this.spriteStep = -65;
            }
        }
        if(direction === 'left'){
            this.container.removeClass("right-side");
            this.container.addClass("left-side");
            this.container.css("left", self.step);
            this.container.css("background-position", self.spriteStep+"px");
            this.step -=10;
            this.spriteStep -= 65;
            if(this.spriteStep < -520){
                this.spriteStep = -65;
            }
        }
    };

    Character.prototype.processStopMove = function () {
        var self = this;
        $(document).keyup(function(e) {
            if (e.keyCode == self.key) {
               self.setKey(false);

                clearInterval(self.moveInterval);
                $('#character').stop(true, true);
                self.container.css("background-position", self.spriteStep+65+"px");
                self.container.css("background-position", 0+"px");
            }
        });
    };

    Character.prototype.initialize = function(){
        this.processMove();
        this.processStopMove();
    };

    Character.prototype.setKey = function(key){
        this.key = key;
    };

    scope.Character = Character;
})(app);