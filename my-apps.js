(function () {
    "use strict";

    var widget = model.widgets.findWidget('my-apps');

    http().get('/userbook/preference/apps').done(function (pref) {
        widget.apps = JSON.parse(pref.preference);
        model.widgets.apply();
    });

    widget.redirect = function (path) {
        window.location.href = path;
    };
}());