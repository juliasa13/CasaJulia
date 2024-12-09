
// script.js

// Lista de itens da casa
const products = [
    {
        id: 1,
        name: "Sofá 2 Lugares",
        description: "Confortável e estiloso.",
        price: 1200,
        image: "https://i.postimg.cc/fJ4yjdcz/sofa.jpg",
        link: "https://mpago.la/2nnsbVJ"
    },
    {
        id: 2,
        name: "Geladeira Frost Free",
        description: "Capacidade de 400L.",
        price: 2500,
        image: "https://i.postimg.cc/bGMpYXLy/geladeira.jpg",
        link: "https://mpago.la/1jM1jRz"
    },
    {
        id: 3,
        name: "Jogo de Panelas",
        description: "Conjunto de 5 peças antiaderentes.",
        price: 300,
        image: "https://i.postimg.cc/9z9FMfvv/panelas.jpg",
        link: "https://mpago.la/15gTR9w"
    },
    {
        id: 4,
        name: "Cama Queen",
        description: "Espaçosa e macia.",
        price: 1500,
        image: "https://i.postimg.cc/tYHRVjb7/cama.jpg",
        link: "https://mpago.la/27HKrJA"
    },
    {
        id: 5,
        name: "Mesa de Jantar",
        description: "Para refeições deliciosas.",
        price: 900,
        image: "https://i.postimg.cc/QKZD5pRv/mesa.jpg",
        link: "https://mpago.la/1RoDpT7"
    }
];

// Renderizar os produtos na página
const productList = document.getElementById('product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-md-6', 'col-lg-4'); // Classes Bootstrap para responsividade
    productDiv.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="text-success fw-bold">R$ ${product.price.toFixed(2)}</p>
                <a class="btn btn-success w-100" href="${product.link}" target="_blank">
                    Contribuir
                </a>
            </div>
        </div>
    `;
    productList.appendChild(productDiv);
});
