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
        calculateTable(this);
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

    function calculateTable(e){
        //TODO: find all td in selected category and calculate from that instead
        if($(e).text() != 1)
            return;
        el = $(e).closest('table').prevUntil('.subcat').prev();
        s = el.html();
//      console.log(s);
        //get the numbers
        first = s.indexOf("(");
        second = s.indexOf(")");
        numbers = s.slice(first+1, second).split(" of ");
//      console.log(numbers);
        //get text
        text = s. split(' ').filter(element => element.length > 2)[0];
//      console.log(text);
        //get %
        first = s.lastIndexOf("(");
        second = s.lastIndexOf(")");
        p = s.slice(first+1,second).split("%")
        //change %
        newp = ((Number(numbers[0])+1) / Number(numbers[1]) * 100);
        //set newp with one decimal
        newp = Math.round((newp + Number.EPSILON) * 10) / 10;
        //increment number, create new text and add to element
        newText = `${text} (${Number(numbers[0])+1} of ${numbers[1]}) (${newp}%)`;
        el.html(newText);
//      console.log(newText)
        //Axes (0 of 8) (0.0%)
    }

});
