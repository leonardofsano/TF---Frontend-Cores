const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;


        /** CODAR AQUI */
        // Remove .selected de todos os itens
        liElementCollection.forEach(li => li.classList.remove("selected"));
        // Adiciona .selected ao item clicado
        liElement.classList.add("selected");
    });
});