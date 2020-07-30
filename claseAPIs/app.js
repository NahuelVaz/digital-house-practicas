window.onload(function(){
    fetch("https://api.giphy.com/v1/gifs/random?api_key=mPbijSK0qRHz0XvGtuZXLcHUBaV5AF6I&tag=&rating=g")
    .then(function(response){
        response.json()
    })
    .then(function(info){
        let name = info.data.title
        let URL = info.data.image_url
        document.getElementById('gif-title').innerHTML = name
        document.getElementById('gif-image').src = URL
    })


})