/*
*/

define(["../dom"], function (dom) {

    // left default skills container
    dom.createSquareInDiv(
    	$('#battle-left'),
    	false,
    	5,
    	true,
    	null
    );

    // right personal skills container
    dom.createSquareInDiv(
		$('#battle-right'),
		false,
		5,
		true,
		null
	);

    // create moving space of enemy
    dom.createSquareInDiv(
        $('#space-enemy'),
        true,
        5,
        true,
        null
    );

    // create moving space of self part
    dom.createSquareInDiv(
        $('#space-self'),
        true,
        5,
        true,
        null
    );

    

});