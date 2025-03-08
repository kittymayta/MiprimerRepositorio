let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para el sorteo.");
        return;
    }
    
    let desordenados = [...amigos];
    desordenados = desordenados.sort(() => Math.random() - 0.5);
    
    let resultado = [];
    for (let i = 0; i < amigos.length; i++) {
        let asignado = desordenados[i];
        if (amigos[i] === asignado) {
            sortearAmigo(); // Si alguien se asigna a sí mismo, rehacer el sorteo
            return;
        }
        resultado.push(`${amigos[i]} → ${asignado}`);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";
    
    resultado.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}
