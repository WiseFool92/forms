$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var thoughtInput = $("input#thought").val();
    $("body").removeClass();
    $("body").addClass("shouting");
    
    $(".thought").text(thoughtInput);

    $("#shout").show();

    event.preventDefault();
  });
});