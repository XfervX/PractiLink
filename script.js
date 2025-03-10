// Base de datos simulada con propiedades
const propiedades = [
    { id: 1, zona: "Centro", precio: 5000, descripcion: "Cuarto amueblado cerca del Zócalo." },
    { id: 2, zona: "San Manuel", precio: 4500, descripcion: "Departamento con estacionamiento." },
    { id: 3, zona: "Cholula", precio: 3800, descripcion: "Loft con terraza en Cholula." },
    { id: 4, zona: "Angelópolis", precio: 10000, descripcion: "Departamento de lujo con amenidades." },
    { id: 5, zona: "La Paz", precio: 7200, descripcion: "Apartamento con vista panorámica." }
];

// Función para buscar propiedades según la zona
function buscar() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let resultadosFiltrados = propiedades.filter(p => p.zona.toLowerCase().includes(searchTerm));

    mostrarResultados(resultadosFiltrados);
}

// Función para filtrar por precio
function filtrar() {
    let min = parseInt(document.getElementById("minPrice").value) || 0;
    let max = parseInt(document.getElementById("maxPrice").value) || Infinity;

    let resultadosFiltrados = propiedades.filter(p => p.precio >= min && p.precio <= max);

    mostrarResultados(resultadosFiltrados);
}

// Función para mostrar los resultados en la página
function mostrarResultados(resultados) {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";

    if (resultados.length === 0) {
        listado.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
    }

    resultados.forEach(p => {
        listado.innerHTML += `
            <div class='result-card'>
                <strong>${p.zona}</strong><br>
                Precio: $${p.precio} MXN<br>
                ${p.descripcion}
            </div>
        `;
    });
}

// Función del asistente IA
function responderIA() {
    let question = document.getElementById("chatInput").value.toLowerCase();
    let response = "No entendí la pregunta, intenta otra vez.";

    if (question.includes("precio")) {
        response = "Los precios dependen de la ubicación. Puedes usar los filtros para buscar por precio.";
    } else if (question.includes("ubicación")) {
        response = "Podemos buscar en la colonia o ciudad que prefieras.";
    } else if (question.includes("departamento")) {
        response = "Sí, tenemos departamentos disponibles en varias zonas.";
    }

    document.getElementById("chatResponse").innerText = response;
}
