let url = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

let respose = fetch(url);
console.log(respose);

const getData = async () =>{
    let res = await fetch(url);
    console.log(res);
    console.log(res.status);
}
console.log(getData());