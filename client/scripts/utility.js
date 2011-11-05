/*
*/

define( function(){

    return{
        
        mskeJson: function( arr ){

            function includedQuoter( value ){
                return '\"' + value + '\"';
            }

            if( arr.length > 0 && arr.length % 2 != 1 ){
                var json = '{';
                for( var i = 0; i < arr.length; i += 2 ){
                    json = json + includedQuoter(arr[i]);
                    var value = arr[i+1];
                    if( typeof value != 'number' ){
                        value = includedQuoter(value);
                    }
                    json = json + value;
                    if( i != arr.length ){
                        json = json + ',';
                    }
                }
                json += '}';
                return json;
            }
            else{
                alert('System Error: makeJson in utility.js');
            }
        }
    }
}