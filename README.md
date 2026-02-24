# Etch-a-Sketch

Boton que define el tamaño(JS)

bontón con escucha(click) con un promt.
recopilar información del tamaño y pasarlo a la funcion createDivs

funcion createDivs
borrar grid anterior container = null;
si no es igual a un num alert, no es un num y menor que 100
si cumple los requisitos 
total de cuadros = valor*valor
y funcion for( i < total de cuadrados; i++){
        const div = document.createElement("div");
        container.appendChild(div);
        div.addEventListener("mouseenter", ()=>{
            div.style.backgroundColor = "pink";
        })
    }


createDivs();
