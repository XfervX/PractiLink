// Base de datos falsa (simulada en un array de objetos)
const propiedades = [
    { id: 1, zona: "Centro", precio: "$5,000", descripcion: "Cuarto amueblado cerca del Zócalo." },
    { id: 2, zona: "San Manuel", precio: "$4,500", descripcion: "Departamento con estacionamiento." },
    { id: 3, zona: "Cholula", precio: "$3,800", descripcion: "Loft con terraza en Cholula." }
];

// Función para buscar propiedades
function buscar() {
    const filtro = document.getElementById("busqueda").value.toLowerCase();
    const resultados = propiedades.filter(p => p.zona.toLowerCase().includes(filtro));

    const lista = document.getElementById("resultados");
    lista.innerHTML = "";

    if (resultados.length === 0) {
        lista.innerHTML = "<li>No se encontraron resultados</li>";
    } else {
        resultados.forEach(p => {
            lista.innerHTML += `<li><strong>${p.zona}</strong> - ${p.precio} - ${p.descripcion}</li>`;
        });
    }
}
