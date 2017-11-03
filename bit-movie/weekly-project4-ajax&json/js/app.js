$(function () {
    const url = "http://api.tvmaze.com/shows";
    $.getJSON(url, array => {
        let items = [];
        for (let i = 0; i < 50; i++) {
            items[i] = array[i];
        }
        $.each(items, (index, value) => {
            const id = value.id;
            $("#main").append(`<div class=\"card\"><a id = \"${id}\" href=\"single.html\"><img class=\"card-img-top\" src=\"${value.image.medium}\"><div class=\"card-block\"><h3 class=\"card-title\">${value.name}</h3></div></a></div>`);
        })
    })

    $(document).on("keydown", "#search", function () {
        $(".searchList").html("");
        const search = $(this).val();
        const searchUrl = `http://api.tvmaze.com/search/shows?q=${search}`;
        $.getJSON(searchUrl, array => {
            let items = [];
            for (let i = 0; i < 10; i++) {
                items[i] = array[i];
            }
            $.each(items, (index, value) => {
                const id = value.show.id;
                $(".searchList").append(`<li><a id=\"${id}\" href=\"single.html\">${value.show.name}</a></li>`);
            });
        });
    })

    $(document).on("click", "a", function (event) {
        const id = $(this).attr("id");
        sessionStorage.setItem("id", id);
    });
});