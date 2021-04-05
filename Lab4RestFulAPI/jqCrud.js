$(function() {
    LoadPosts();
    $("#posts").on("click", ".btn-danger", handleDelete);
    $("#posts").on("click", ".btn-warning", handleUpdate);
    $("#posts").on("click", ".btn-success", ViewDetails);
    $("#addBtn").click(AddRecipe);
    $("#updateSave").click(function() {
        var id = $("#updateId").val();
        var title = $("#updateTitle").val();
        var body = $("#updateBody").val();
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/" + id,
            data: { title, body },
            method: "PUT",
            success: function(response) {
                console.log(response);
                LoadPosts();
                $("#updateModal").modal("hide");
            }
        });
    });

    $("#postSave").click(function() {



        LoadPosts();
        $("#postModal").modal("hide");
    });



});

function ViewDetails() {

    var btn = $(this);
    var parentDiv = btn.closest(".PostSpace");
    let id = parentDiv.attr("data-id");
    console.log(id);

    $.get("https://jsonplaceholder.typicode.com/posts/" + id, function(response) {
        $("#postId").val(response.id);
        $("#postTitle").val(response.title);
        $("#postBody").val(response.body);


    });
    $.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments", function(e) {


        for (var i = 0; i < e.length; i++) {
            var rec = e[i];
            $("#commentBody").append(`<div class = "commentBorder" data-id = ${rec.id}><p id = "PostsBorder"> <h5>Name: <br></h5>  ${rec.name} </p> <br><p id = "PostsBorder"> <h5> Email:</h5> <br>${rec.email}</p> <br> <p id = "PostsBorder"> <h5> Body:</h5> <br>${rec.body}</p> <br></div>`);


        }


    });

    $("#postModal").modal("show");
}


function handleDelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".PostSpace");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        method: "DELETE",
        success: function() {
            LoadPosts();
        }
    });

}

function handleUpdate() {
    var btn = $(this);
    var parentDiv = btn.closest(".PostSpace");
    let id = parentDiv.attr("data-id");
    $.get("https://jsonplaceholder.typicode.com/posts/" + id, function(response) {
        $("#updateId").val(response.id);
        $("#updateTitle").val(response.title);
        $("#updateBody").val(response.body);
        $("#updateModal").modal("show");
    });
}

function AddRecipe() {
    var title = $("#title").val();
    var body = $("#body").val();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: { title, body },
        success: function(response) {
            console.log(response);
            $("#title").val("");
            $("#body").val("");
            LoadPosts();
        }
    });


}

function LoadPosts() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
        error: function(response) {
            var recipes = $("#posts");
            recipes.html("An Error has occured");
        },
        success: function(response) {
            console.log(response);
            var Posts = $("#posts");
            Posts.empty();
            for (var i = 0; i < response.length; i++) {
                var rec = response[i];
                Posts.append(
                    `<div class="PostSpace" data-id = ${rec.id}> <button class="btn btn-danger btn-sm float-right">delete</button>   <button class="btn btn-warning btn-sm float-right">Edit</button> <button class="btn btn-success btn-sm float-right">   View detail</button> <h3>Post NO: ${rec.id}</h3><p id = "PostsBorder"> Title: <br>${rec.title}</p></div>`
                );

            }
        }
    });
}