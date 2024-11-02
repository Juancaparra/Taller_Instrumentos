document.addEventListener('DOMContentLoaded', () => {
    const cartItemCount = document.querySelector('.cart-icon span');
    const cartItemList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon');
    const sidebar = document.getElementById('sidebar');
    const checkoutButton = document.querySelector('.checkout-btn');

    let cartItems = [];
    let totalAmount = 0;

    function addEventListenersToButtons() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const item = {
                    name: document.querySelectorAll('.product-name')[index].textContent,
                    price: parseFloat(
                        document.querySelectorAll('.price')[index].textContent.replace('$', '').replace(',', ''),
                    ),
                    quantity: 1,
                };
                const existingItemIndex = cartItems.findIndex(
                    (cartItem) => cartItem.name === item.name,
                );

                if (existingItemIndex !== -1) {
                    cartItems[existingItemIndex].quantity++;
                } else {
                    cartItems.push(item);
                }

                totalAmount += item.price;
                updateCartUI();
            });
        });
    }

    function updateCartUI() {
        updateCartItemCount();
        updateCartItemList();
        updateCartTotal();
    }

    function updateCartItemCount() {
        cartItemCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    function updateCartItemList() {
        cartItemList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'individual-cart-item');
            cartItem.innerHTML = `
                <span>(${item.quantity}x) ${item.name}</span>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}
                <button class="remove-btn" data-index="${index}"><i class="bi bi-x"></i></button>
                </span>
            `;
            cartItemList.appendChild(cartItem);
        });

        document.querySelectorAll('.remove-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                const index = event.target.closest('.remove-btn').dataset.index;
                removeItemFromCart(index);
            });
        });
    }

    function removeItemFromCart(index) {
        const removedItem = cartItems.splice(index, 1)[0];
        totalAmount -= removedItem.price * removedItem.quantity;
        updateCartUI();
    }

    function updateCartTotal() {
        cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Evento para el botón de checkout
    checkoutButton.addEventListener('click', () => {
        if (cartItems.length > 0) {
            alert('¡Compra exitosa! Gracias por tu compra.');
            cartItems = [];
            totalAmount = 0;
            updateCartUI(); // Actualiza la interfaz para vaciar el carrito
            sidebar.classList.remove('open'); // Cierra el sidebar
        } else {
            alert('El carrito está vacío. Por favor, añade productos.');
        }
    });

    cartIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    const closeButton = document.querySelector('.sidebar-close');
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    addEventListenersToButtons();  // Llama la función para añadir eventos a los botones de productos generados
});
