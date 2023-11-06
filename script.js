$(document).ready(function() {
    var isRed = false;
    $('#changeColor').click(function() {
        if(isRed){
            $('h1').css('color', 'black');
        }
        else{
            $('h1').css('color', 'red');
        }
        isRed = !isRed;
    });
  });
  