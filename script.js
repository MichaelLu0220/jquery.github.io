$(document).ready(function() {
    var isRed = false;
  
    $('#toggleButton').click(function() {
      if (isRed) {
        $('#text').css('color', '');
      } else {
        $('#text').css('color', 'red');
      }
  
      isRed = !isRed;
    });
  });
  