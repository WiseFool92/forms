$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var objectInput= $("input#object").val();
    var questionInput = $("input#question").val();
    var adjectiveInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".object").text(objectInput);
    $(".question").text(questionInput);
    $(".adjective").text(adjectiveInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});