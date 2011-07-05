define( ["text!pages/battle.html"], function( html ){
    
    function createSquareInDiv( container, isWidth, num, divClass ){
        
        var width = container.width();
        var height = container.height();
            
        
    }
    
    $('#page-content').append( html );
    
    for(var i = 0; i < 5; i++){
        var obj = $('<div>');
        $('#battle-left').append( obj );
    }
});