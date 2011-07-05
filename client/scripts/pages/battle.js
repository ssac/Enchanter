define( ["text!pages/battle.html"], function( html ){
    
    function createSquareInDiv( container, isWidth, num, divClass ){
        
        var len;
        
        if( isWidth === true )
            len = container.width();
        else
            len = container.height();
            
        
    }
    
    $('#page-content').append( html );
    
    for(var i = 0; i < 5; i++){
        var obj = $('<div>');
        $('#battle-left').append( obj );
    }
});