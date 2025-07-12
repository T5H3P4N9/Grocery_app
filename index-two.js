// Sample product data
const products = [
    { id: 1, name: 'Fresh Apple', price: 4.99, category: 'fruits', icon: '🍎', description: 'Fresh and crispy red apples, perfect for snacking or baking.' },
    { id: 2, name: 'Banana Bundle', price: 3.49, category: 'fruits', icon: '🍌', description: 'Sweet and nutritious bananas, rich in potassium and vitamins.' },
    { id: 3, name: 'Fresh Carrots', price: 2.99, category: 'vegetables', icon: '🥕', description: 'Organic carrots, perfect for cooking or eating raw as a healthy snack.' },
    { id: 4, name: 'Broccoli', price: 3.99, category: 'vegetables', icon: '🥦', description: 'Fresh green broccoli, packed with vitamins and perfect for healthy meals.' },
    { id: 5, name: 'Premium Beef', price: 15.99, category: 'meat', icon: '🥩', description: 'High-quality beef cuts, perfect for grilling or roasting.' },
    { id: 6, name: 'Fresh Milk', price: 4.49, category: 'dairy', icon: '🥛', description: 'Fresh whole milk, rich in calcium and essential nutrients.' },
    { id: 7, name: 'Cheese Block', price: 6.99, category: 'dairy', icon: '🧀', description: 'Aged cheddar cheese, perfect for sandwiches or cooking.' },
    { id: 8, name: 'Potato Chips', price: 2.99, category: 'snacks', icon: '🍿', description: 'Crispy and delicious potato chips, perfect for snacking.' },
    { id: 9, name: 'Orange Juice', price: 3.99, category: 'beverages', icon: '🥤', description: 'Fresh squeezed orange juice, packed with vitamin C.' },
    { id: 10, name: 'Strawberries', price: 5.99, category: 'fruits', icon: '🍓', description: 'Sweet and juicy strawberries, perfect for desserts or smoothies.' },
    { id: 11, name: 'Lettuce', price: 2.49, category: 'vegetables', icon: '🥬', description: 'Fresh crisp lettuce, perfect for salads and sandwiches.' },
    { id: 12, name: 'Chicken Breast', price: 12.99, category: 'meat', icon: '🍗', description: 'Lean chicken breast, perfect for healthy protein-rich meals.' }
];

let cart = [];
let currentProduct = null;
let currentQuantity = 1;
let currentCategory = 'all';

function init() {
    displayProducts();
    updateCartCount();
    document.getElementById('search-input').addEventListener('input', handleSearch);
}

function displayProducts() {
    const grid = document.getElementById('products-grid');
    let filteredProducts = products;

    if (currentCategory !== 'all') {
        filteredProducts = products.filter(function (product) {
            return product.category === currentCategory;
        });
    }

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(function (product) {
            return product.name.toLowerCase().includes(searchTerm);
        });
    }

    grid.innerHTML = filteredProducts.map(function (product) {
        return `
            <div class="product-card" onclick="showProductDetail(${product.id})">
                <div class="product-image">${product.icon}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">R${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    }).join('');
}

function filterByCategory(category) {
    currentCategory = category;
    displayProducts();
}

function handleSearch() {
    displayProducts();
}

function showProductDetail(productId) {
    currentProduct = products.find(function (p) {
        return p.id === productId;
    });
    currentQuantity = 1;

    document.getElementById('detail-image').textContent = currentProduct.icon;
    document.getElementById('detail-name').textContent = currentProduct.name;
    document.getElementById('detail-price').textContent = `R${currentProduct.price.toFixed(2)}`;
    document.getElementById('detail-description').textContent = currentProduct.description;
    document.getElementById('quantity-display').textContent = currentQuantity;

    showScreen('product-detail');
}

function increaseQuantity() {
    currentQuantity++;
    document.getElementById('quantity-display').textContent = currentQuantity;
}

function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('quantity-display').textContent = currentQuantity;
    }
}

function addToCartFromDetail() {
    for (let i = 0; i < currentQuantity; i++) {
        addToCart(currentProduct.id);
    }
    showHome();
}

function addToCart(productId) {
    const product = products.find(function (p) {
        return p.id === productId;
    });
    const existingItem = cart.find(function (item) {
        return item.id === productId;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);

    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(function (element) {
        element.textContent = count;
        if (count > 0) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

function showCart() {
    if (cart.length === 0) {
        document.getElementById('cart-empty').style.display = 'block';
        document.getElementById('cart-items').style.display = 'none';
        document.getElementById('cart-total').style.display = 'none';
    } else {
        document.getElementById('cart-empty').style.display = 'none';
        document.getElementById('cart-items').style.display = 'block';
        document.getElementById('cart-total').style.display = 'block';
        displayCartItems();
    }
    showScreen('cart');
}

function displayCartItems() {
    const container = document.getElementById('cart-items');
    const total = cart.reduce(function (sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);

    container.innerHTML = cart.map(function (item) {
        return `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R${item.price.toFixed(2)} each</div>
                    <div class="cart-item-quantity">
                        <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">−</button>
                        <span class="cart-quantity-display">${item.quantity}</span>
                        <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('total-price').textContent = `R${total.toFixed(2)}`;
}

function updateCartQuantity(productId, change) {
    const item = cart.find(function (item) {
        return item.id === productId;
    });

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(function (cartItem) {
                return cartItem.id !== productId;
            });
        }
        updateCartCount();
        showCart();
    }
}

function showCheckout() {
    const total = cart.reduce(function (sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);
    document.getElementById('checkout-total').textContent = `R${total.toFixed(2)}`;
    showScreen('checkout');
}

function placeOrder() {
    const required = ['fullname', 'phone', 'address', 'city', 'cardnumber', 'expiry', 'cvv'];
    let isValid = true;

    required.forEach(function (field) {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#e9ecef';
        }
    });

    if (!isValid) {
        alert('Please fill in all required fields');
        return;
    }

    cart = [];
    updateCartCount();
    showScreen('success');
}

function continueShopping() {
    currentCategory = 'all';
    document.getElementById('search-input').value = '';
    displayProducts();
    showScreen('home');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(function (screen) {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showHome() {
    showScreen('home');
}

document.addEventListener('DOMContentLoaded', init);
