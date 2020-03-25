$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#hooman").prepend("<li>Hello!</li>");
    $("ul#puter").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#hooman").prepend("<li>Goodbye!</li>")
    $("ul#puter").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#hooman").prepend("<li>Stop copying me!</li>");
    $("ul#puter").prepend("<li>Pardon me. I meant no offense</li>");
  });
});