$(function() {
    $("#load").click(sendAjax);
});

function sendAjax() {
    console.log("sending Ajax request");
    $.get("students.txt", handleResponse)
    console.log("Request sent")
}

function handleResponse(response) {
    console.log("response recived");
    $("#result").empty();
    $("#result").append(response);
}