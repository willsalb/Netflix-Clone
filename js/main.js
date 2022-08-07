//Chamar o trailer do filme principal
function trailer() {
    window.open("https://www.youtube.com/watch?v=gTP_qxPLhBE&t=17s&ab_channel=Estante")
}

// Classlist propriedade que da uma lista de todas as classes.
// O método toggle coloca uma classe se não existir, e tira uma classe se existir. 
const button = document.getElementById("btn");

button.addEventListener("click", function() {

    const containerImg = document.getElementById("containerImg");

    containerImg.classList.toggle("hide");
    
});



// Se a div estiver com display none não esta sendo apresentada na pagina(ocultar uma div).
// E também ao contrario se não tiver com display none ela está sendo exibida, então so adcionar none.
const button2 = document.getElementById("bnt");

button.addEventListener("click", function() {

    const hideButton = document.getElementById("hide");

    if(hideButton.style.display === "none") {
        hideButton.style.display = "block";
    } else {
        hideButton.style.display = "none";
    }
    
});

const button3 = document.getElementById("bnt");

button.addEventListener("click", function() {

    const hideButton2 = document.getElementById("hide2");

    if(hideButton2.style.display === "block") {
        hideButton2.style.display = "none";
    } else {
        hideButton2.style.display = "block";
    }
});

