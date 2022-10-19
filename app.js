const api = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

window.addEventListener('DOMContentLoaded', apiFunction);

const containerCards = document.getElementById("containerCards");

document.addEventListener('keyup', e=>{

    if (e.target.matches("#input")){

        if(e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".card").forEach(elemento => {

            elemento.textContent.toLowerCase().includes(e.target.value)
            ?elemento.classList.remove("filter")
            :elemento.classList.add("filter")
        })
    }
})

function apiFunction() {
    fetch(api)
    .then(response => response.json())
    .then(data => data["drinks"].map(results => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = results["strDrinkThumb"];
        img.classList.add("img");

        const name = document.createElement("name");
        name.textContent = results["strDrink"];
        name.classList.add("name");

        div.appendChild(img);
        div.appendChild(name);
        containerCards.appendChild(div);
    }))
}