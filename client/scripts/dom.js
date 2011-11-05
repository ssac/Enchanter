/**
 * 
 */

define( function(){
   
	return{

	    /*
        container: container div
        isWidth: is the space distributed horizontally
        num: how many square div created
        isFloat: are the space with float attribute
        divClass: inserted class
	    */
		createSquareInDiv: function ( container, isWidth, num, isFloat, divClass ){
	        
			function calcUnitLength( totalLen, minLen, num ){
				if( totalLen >= minLen * num )
					return minLen;
				else
					return totalLen / num;
			}
			
	        var width = container.width();
	        var height = container.height();
	        var unitLen, floatType;
	            
	        if( isWidth === true )
	        	unitLen = calcUnitLength( width, height, num );
	        else
	        	unitLen = calcUnitLength( height, width, num );
	        
	        if( isFloat === true )
	        	floatType = 'left';
	        else
	        	floatType = 'none';
	        
	        for( var i = 0; i < num; i++){
	            var div = $('<div>');
                if( divClass != null )
		            div.addClass( divClass );
		        div.css({
		        	width: unitLen.toString() + 'px',
		        	height: unitLen.toString() + 'px',
		        	float: floatType
		        });
		        container.append( div );
	        }
	    }
	};
});