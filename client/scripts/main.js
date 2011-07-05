$(document).ready( function(){
    
    if( !("WebSocket" in window) ){
        
        alert("Your Browser Doesn't Support WebSocket.");
        
    }else{
        
        require([
            "./scripts/pages/battle"
        ]);
        
    }
    
});