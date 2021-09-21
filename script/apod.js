    $("#btn").on("click", function () {
    const seach = $("#dateSeach").val()
    console.log(seach)
    var url = "https://api.nasa.gov/planetary/apod?api_key=sJT9kQAoA7iHfUiWP5Vf0tFUJ3Um3lmYSeUrkudI&date="+seach;

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",


        success(resposta) {
            console.log(resposta)
            $("#img").attr("src", resposta.hdurl)
            
        }

    })
})