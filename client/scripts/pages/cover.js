/*
*/

define(['./socket', './utility'], function (socket, utility) {

    // toggle to show signup div
    $("#page-cover-content-login-signup").click(function () {
    });

    $("#page-cover-content-login-submit").click(function () {
        socket.sendJson(
            'module', 'login',
            'loginType', 'general',
            'uname', $('#page-cover-content-login-uname').val(),
            'pw', $('#page-cover-content-login-pw').val()
        );
    });

    $("#page-cover-content-play-submit").click(function () {
        socket.sendJson(
            'module', 'login',
            'loginType', 'freePlay',
            'playerName', $('#page-cover-content-play-uname').val()
        );
    });

    $("#page-cover-content-signup-submit").click(function () {
        socket.sendJson(
            'module', 'signup',
            'uname', $('#page-cover-content-signup-uname').val(),
            'pw', $('#page-cover-content-signup-pw').val()
        );
    });
})