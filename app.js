/**
 * Created by jinja on 26.8.2017 г..
 */
var app = app || {};

(function () {
    var container = $('#character');
    var character = new app.Character(container);
    character.initialize();

    var engine = new app.Engine();
    engine.initialize();
}());