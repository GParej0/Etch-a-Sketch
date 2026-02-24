const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click",() => {
    let squares = parseInt(prompt("Cuantos cuadrados por lado?"));
    function definingSize(squares){
        while(isNaN(squares) || squares > 100){
            if(isNaN(squares)){
                alert("Eso no es un número");
            } else if (squares > 100){
                alert("Ese número es muy alto");
            
        } squares = prompt("Intenta de nuevo. ¿Cuántos cuadrados por lado?")
    } return squares
}
let size = definingSize(squares);
container.innerHTML = "";
createDivs(size);
});
function createDivs(size){
    let totalSize = size*size;
    for(let i = 0; i < totalSize; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.style.width = (500/size) + "px";
        div.style.height = (500/size) + "px";
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.addEventListener("mouseenter", ()=>{
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    
)}
}