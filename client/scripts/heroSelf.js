/*
*/

define(['./hero'], function ( hero ) {

    Function Dog()
    {
    }

    Dog.prototype = new Animal();

    Dog.prototype.aaa = function(){};

    return Dog;
});