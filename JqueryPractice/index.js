$("h1").css("color", "red")
$("button").html("<em>Click</em>")
$("button").text("Hey Click me")
$("h1").addClass("margin")

console.log($("h1").css("font-size"))
console.log($("h1").hasClass("margin"))

$("img").attr("src", "./images/red-flowers-photography-1160500.jpg")
$("a").attr("href", "https://www.youtube.com/")
console.log($("a").attr("href"))

$("button").click(function(e) {
    $("h1").css("color", "purple");
});

$(document).keydown(function(e) {

    $("h1").html(e.key)
});

$("input").keydown(function(e) {
    console.log(e.key)
});