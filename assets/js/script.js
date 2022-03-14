document.querySelector('#search').addEventListener('click', function(){
    searchGif()
});

document.querySelector('#reset').addEventListener('click', function(){
    location.reload();
});


function searchGif() {

    document.getElementById("gifView").innerHTML = '';//чтобы не множить 5 картинок при многоразовом нажатии на поиск

    let gifSearch = document.getElementById("gifSearch").value;


    fetch('https://api.giphy.com/v1/gifs/search?api_key=YE5Q5b8pJlSFjrfT1KcSWaEQy8KsAdIj&q=' + gifSearch + '&limit=5&offset=0&rating=g&lang=en')
    .then(response => response.json())
    .then(gif => {
        document.getElementById("gifView").innerHTML +=
        `<img src="${gif.data[0].images.fixed_width.url}" alt="${gifSearch}" class="img"></img>`+
        `<img src="${gif.data[1].images.fixed_width.url}" alt="${gifSearch}" class="img"></img>`+
        `<img src="${gif.data[2].images.fixed_width.url}" alt="${gifSearch}" class="img"></img>`+
        `<img src="${gif.data[3].images.fixed_width.url}" alt="${gifSearch}" class="img"></img>`+
        `<img src="${gif.data[4].images.fixed_width.url}" alt="${gifSearch}" class="img"></img>`
    })
    .catch(error =>console.log(error));

}

/* Здесь я тренировалась с промисами, пока неудачно
let alenasPromise = new Promise(function(resolve, reject) {

    let alenasEarnings = 2000;
    let dogPrice = 1500;

    if (alenasEarnings > dogPrice) {
        resolve({
        pet: "dog",
        name: "Fixik",
        race: "Westie"
        });
    } else {
        reject('нет денег');
    }
});

alenasPromise.then(function(value) {
    console.log("У нас собака!", JSON.stringify(value));
    });
    alenasPromise.catch(function(reason) {
    console.log("Мама не смогла купить собаку потому что", reason);
    });

console.log(alenasPromise);
*/
