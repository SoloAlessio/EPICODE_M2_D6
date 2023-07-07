function h1(){
    let h1 = document.getElementById("title");
    let titolo = document.getElementById("title-name").value;
    h1.innerHTML = titolo;
}
function background(){
    document.body.style.background = "#fff";
    console.log("Colore di sfondo cambiato");
}
function indirizzo(){
    let indirizzo = document.getElementById("indirizzo");
    indirizzo.innerHTML = "Roma, Italy";
}
function link(){
    let link = document.querySelectorAll("a");
    for(let i = 0; i < link.length; i++){
            link[i].classList.toggle("link");
    }
    console.log(link);
}
function ImgVisible(){
    let img = document.querySelectorAll("img");
    for(let i = 0; i < img.length; i++){
            img[i].classList.toggle("hide");
    }
    console.log(img);
}

function ColorePrezzo(){
    let prezzo = document.querySelectorAll(".prezzo");
    let color = Math.floor(Math.random()*16777215).toString(16);
    for(let i = 0; i < prezzo.length; i++){
            prezzo[i].style.color = "#" + color;
    }
    console.log(prezzo);
}