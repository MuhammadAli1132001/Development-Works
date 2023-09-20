//alert("linking of js");
$("h1").text("changed")
$("h1").addClass("big-title margin");

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h2").click (function(){
    $("h2").css("color", "red");
});