/*
*/

define( function(){
    
    return{
        
        drawBackRune: function( type, container ){
            
            // fill background color of the rune
            var strBackCol;
            switch( type ){
                case 0:
                    strBackCol = 0;
                    break;
                case 1:
                    strBackCol = 1;
                    break;
                case 2:
                    strBackCol = 2;
                    break;
                default:
                    strBackCol = 9;
            }
            var canvas = new canvas();
            canvas.width = container.width;
            canvas.height = container.height;
            canvas.fillStyle = strBackCol;
            canvas.fillRect( 0, 0, container.width, container.height );
            
            // draw a alpha color of the rune
            canvas.arc(
                container.width / 2,
                container.height / 2,
                0,
                Math.PI * 2,
                true
            );
        },
        
        drawFrontRune: function( path, container ){
            var img = new Image();
            img.src = path;
            var ctx = new Canvas();
            ctx.drwaImage( img, 0, 0 );
            container.append( ctx );
        },
        
        drawMoveSpace: function(){
        }
        
    }
})