/*
*/

define(function () {

    function hero(){
        var iBlood;
        var iPos;
        var arrSkills = [];
    }
    
    function heroSelf(){
        var iNumOfWin = 0;
        var iNumOfLose = 0;
    }
    heroSelf.prototype = new hero();

    $('#page-prepare').hide();
    $('#page-battle').hide();
});