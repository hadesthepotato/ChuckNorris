const url = "https://api.chucknorris.io/jokes/random";

async function chuckNorris(){
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData.value;
}

document.querySelector('button').addEventListener('click',async ()=>{
    document.querySelector('h4').innerHTML = "";
    const joke = await chuckNorris();
    document.querySelector('h4').appendChild(document.createTextNode(joke));
})
