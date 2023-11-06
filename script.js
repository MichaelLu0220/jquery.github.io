$(document).ready(function() {
    var isRed = false;
    $('#changeColor').click(function() {
        if(isRed){
            $('h1').css('color', 'blue');
        }
        else{
            $('h1').css('color', 'red');
        }
        isRed = !isRed;
    });
  });
  