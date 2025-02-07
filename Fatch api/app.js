let url = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
let image = document.querySelector("#image");

let respose = fetch(url);
console.log(respose);

const getData = async () =>{
    let res = await fetch(url);
    console.log(res);// response in json format
    console.log(res.status);
    let data = await res.json();
    console.log(data);
    image.src = data.url;
}
console.log(getData());