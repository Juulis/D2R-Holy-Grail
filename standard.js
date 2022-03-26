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
            setTimeout(changeColorBriefly(this, 'blue'), 3000)
        }
        else if(e.which == 3){
            $(this).text(Number(Number(this.innerText)-1));
            setTimeout(changeColorBriefly(this), 3000)

        }
    }));


    function changeColorBriefly(e, color){
        $(e).css("color", "red");
    }
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
