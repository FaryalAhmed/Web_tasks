window.onload = async function() {
    loadData();
    $("#posts").on("click", ".btn-danger", handleDelete);
    $("#addBtn").click(createRecipie);
};

function loadData() {
    axios.get("https://usman-recipes.herokuapp.com/api/recipes").then((rec) => {
        console.log(rec.data);
        $("#posts").empty();
        for (var i = 0; i < rec.data.length; i++) {
            $("#posts").append(
                `<div class="PostSpace" data-id = ${rec.id}> <button class="btn btn-danger btn-sm float-right">delete</button>   <button class="btn btn-warning btn-sm float-right">Edit</button> <button class="btn btn-success btn-sm float-right">   View detail</button> <h3>Post NO: ${rec.id}</h3><p id = "PostsBorder"> Title: <br>${rec.title}</p></div>`
            );
        }
    });
}

function createRecipie(title, body) {

    var title = $("#title").val();
    var body = $("#body").val();

    console.log(title);
    console.log(body);
    axios
        .post("https://usman-recipes.herokuapp.com/api/recipes", {
            title,
            body,
        })
        .then((res) => {
            console.log(res.data);

        });

}

function handleDelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".PostSpace");
    let id = parentDiv.attr("data-id");
    console.log(id);
    axios.delete(
            "https://usman-recipes.herokuapp.com/api/recipes/" + id
        )
        .then(res => res.data);
}