document.querySelector('#search').addEventListener('click', function(){
    let gif = document.getElementById("gifSearch").value;


    fetch('https://api.giphy.com/v1/gifs/search?api_key=YE5Q5b8pJlSFjrfT1KcSWaEQy8KsAdIj&q=' + gif + '&limit=5&offset=0&rating=g&lang=en&fixed_width')
    .then(response => response.json())
    .then(gifka => {
        document.getElementById("gifView").innerHTML +=
        `<img src="${gifka.data[0].images.fixed_width.url}" alt="${gif}" class="img"></img>`+
        `<img src="${gifka.data[1].images.fixed_width.url}" alt="${gif}" class="img"></img>`+
        `<img src="${gifka.data[2].images.fixed_width.url}" alt="${gif}" class="img"></img>`+
        `<img src="${gifka.data[3].images.fixed_width.url}" alt="${gif}" class="img"></img>`+
        `<img src="${gifka.data[4].images.fixed_width.url}" alt="${gif}" class="img"></img>`
    })
    .catch(error =>console.log(error));
});

document.querySelector('#reset').addEventListener('click', function(){
    location.reload();
});

// document.getElementById("gifView").innerHTML += `<img src="${gifka.data[0].images.fixed_width.url}"></img>`

