$(document).ready(function(){

//Removing contextmenu when rightclick
   $('.b , .c , .e , .s').bind("contextmenu",function(e){
      return false;
   });
//increment/decrement finding
    $('.b').mousedown( doubleRightClickHandler(function (e) {
        e.preventDefault()
        if(e.which == 1){
            $(this).text(Number(Number(this.innerText)+1));
        }
        else if(e.which == 3){
            $(this).text(Number(Number(this.innerText)-1));
        }
    }));

//set PERF attr
 $('.s').mousedown( doubleRightClickHandler(function (e) {
        e.preventDefault()
        if($(this).css('color') != 'rgb(50, 205, 50)')
            $(this).css('color','rgb(50, 205, 50)');
        else
            $(this).css('color','rgba(210, 210, 210, 0.3)');
    }));

//set ETH attr
$('.c').mousedown( doubleRightClickHandler(function (e) {
        e.preventDefault()
        if($(this).css('color') != 'rgb(186, 197, 195)')
            $(this).css('color','rgba(186, 197, 195, 1)');
        else
            $(this).css('color','rgba(210, 210, 210, 0.3)');
    }));


    function doubleRightClickHandler( handler ) {
        var timeout = 0, clicked = false;
        return function(e) {

            e.preventDefault();

            if( clicked ) {
                clearTimeout(timeout);
                clicked = false;
                return handler.apply( this, arguments );
            }
            else {
                clicked = true;
                timeout = setTimeout( function() {
                    clicked = false;
                }, 500 );
            }
        };
    }


});
