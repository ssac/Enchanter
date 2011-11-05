/*
*/

define( ['./utility'], function( utility ){
    
    var socket = new WebSocket();
    var arrHandler = [];
    
    socket.onopen = function(){
    };
    
    socket.onerror = function(){
    };
    
    socket.onclose = function(){
    };
    
    socket.onmessage = function(){
    };
    
    return{
    
        bind: function( handler ){
            arrHandler.push( handler );
        },

        sendJson: function () {
            socket.send( utility.makeJson(arguments) );
        }
        
    }
})