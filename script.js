const container = document.querySelector(".container");
function createDivs(){
    for(let i = 0; i < 256; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.addEventListener("mouseenter", ()=>{
            div.style.backgroundColor = "pink";
        })
    }
}

createDivs();