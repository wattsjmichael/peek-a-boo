$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle(1000);
    $("#walrus-hidden").fadeToggle(1000);
  });
});