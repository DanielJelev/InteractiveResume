/**
 * Created by jinja on 2.10.2017 г..
 */
var app = app || {};

(function (scope) {

    function Character(container){
        this.container = container;
        this.step = 0;
        this.spriteStep = 0;
    }

    Character.prototype.move = function(direction){
        if(direction === 'right'){
            this._setRightSprite();
            this._resetSprite();
        }
        if(direction === 'left'){
            this._setLeftSprite();
            this._resetSprite();
        }
    };

    Character.prototype._setRightSprite = function () {
        var self = this;
        this.container.removeClass("left-side");
        this.container.addClass("right-side");
        this.container.css("left", self.step);
        this.container.css("background-position", self.spriteStep+"px");
        this.step +=10;
        this.spriteStep -= 65;
    };

    Character.prototype._setLeftSprite = function () {
        var self = this;
        this.container.removeClass("right-side");
        this.container.addClass("left-side");
        this.container.css("left", self.step);
        this.container.css("background-position", self.spriteStep+"px");
        this.step -=10;
        this.spriteStep -= 65;
    };

    Character.prototype._resetSprite = function () {
        if(this.spriteStep < -322){
            this.spriteStep = -65;
        }
    };

    Character.prototype._initializeMoveEvents = function(){
        var self = this;
        $.subscribe("move-right", function(){
            self.move("right");
        });
        $.subscribe("move-left", function(){
            self.move("left");
        });
    };

    Character.prototype.initialize = function(){
        this._initializeMoveEvents();
    };

    scope.Character = Character;

})(app);