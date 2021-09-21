$("#btn").on("click", function () {
    const seach = $("#dateSeach").val()
    const key = "sJT9kQAoA7iHfUiWP5Vf0tFUJ3Um3lmYSeUrkudI"
    var url = "https://api.nasa.gov/planetary/apod?api_key=" + key + "&date=" + seach;

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",


        success(resposta) {
            console.log(resposta)
            $("#title").text(resposta.title)
            $("#img").attr("src", resposta.hdurl)
            $("#explanation").text(resposta.explanation)

        }

    })
})