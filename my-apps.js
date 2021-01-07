(function () {
    "use strict";

    var widget = model.widgets.findWidget('my-apps');

    http().get('/userbook/preference/apps').done(function (pref) {
        var apps = JSON.parse(pref.preference);
        widget.apps = apps && apps.bookmarks && apps.bookmarks.map(function(bookmark) {
            return model.me.apps.find(function(app){
                return app.name == bookmark;
            });
        });
        model.widgets.apply();
    });

    widget.redirect = function (path) {
        window.location.href = path;
    };
}());