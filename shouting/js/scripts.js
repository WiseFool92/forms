$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var thought = $("input#thought").val();

    $(".thought").text(thoughtInput).toUpperCase;

    $("#shout").show();

    event.preventDefault();
  });
});