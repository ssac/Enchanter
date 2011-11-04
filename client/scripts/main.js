/*
*/

require.ready(function () {

    if (!("WebSocket" in window)) {

        alert("Your Browser Doesn't Support WebSocket.");

    } else {

        require(["./scripts/jquery-1.6.2"], function () {

            require([
                "./scripts/init",
                "./scripts/pages/battle",
                "./scripts/pages/prepare"
            ]);
        });

        /*
        require([
        "order!./scripts/jquery-1.6.2",
        "order!./scripts/init",
        "./scripts/pages/battle",
        "./scripts/pages/prepare"
        ]);
        */
    }

});