document.addEventListener('DOMContentLoaded', () => {
    const productRow = document.getElementById('product-row');

    const products = [
        {
            name: 'Piano Yamaha',
            price: 2500000,
            image: 'assets/img/piano.avif',
        },
        {
            name: 'Guitarra Fender',
            price: 150000,
            image: 'assets/img/guitarraElectrica.webp',
        },
        {
            name: 'Batería Tama',
            price: 500000,
            image: 'assets/img/BateriaTama.webp',
        },
        {
            name: 'Violín Stradivarius',
            price: 1200000,
            image: 'assets/img/Violin.webp',
        },
        {
            name: 'Saxofón Selmer',
            price: 900000,
            image: 'assets/img/saxofon.webp',
        },
        {
            name: 'Trompeta Bach',
            price: 750000,
            image: 'assets/img/trompeta.webp',
        },
        {
            name: 'Clarinete Buffet',
            price: 300000,
            image: 'assets/img/clarinete.webp',
        },
        {
            name: 'Flauta Yamaha',
            price: 250000,
            image: 'assets/img/flauta.jpg',
        },
        {
            name: 'Contrabajo Stentor',
            price: 2000000,
            image: 'assets/img/contrabajo.jpg',
        },
        {
            name: 'Cello Suzuki',
            price: 1000000,
            image: 'assets/img/cello.jpeg',
        },
        {
            name: 'Ukulele Kala',
            price: 100000,
            image: 'assets/img/ukulele.webp',
        },
        {
            name: 'Mandolina Ibanez',
            price: 600000,
            image: 'assets/img/mandolina.webp',
        }
    ];

    function renderProducts() {
        products.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2 class="product-name">${product.name}</h2>
                <h3 class="price">$${product.price.toLocaleString()}</h3>
                <button class="add-to-cart">Agregar al Pedido</button>
            `;
            productRow.appendChild(productCard);
        });
    }

    renderProducts();
});
