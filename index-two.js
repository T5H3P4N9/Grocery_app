// Sample product data
const products = [
    { id: 1, name: 'Fresh Apple 1kg', price: 34.99, category: 'fruits', icon: '🍎', image: './RED APPLE 1KG_result.jpg', description: 'Fresh and crispy red apples, perfect for snacking or baking.' },
    { id: 2, name: 'Banana Bundle 650g', price: 23.49, category: 'fruits', icon: '🍌', image: './BANANA 650g_result.jpg', description: 'Sweet and nutritious bananas, rich in potassium and vitamins.' },
    { id: 3, name: 'Fresh Carrots 1kg', price: 22.99, category: 'vegetables', icon: '🥕', image: './carrot pack 1kg_result.jpg', description: 'Organic carrots, perfect for cooking or eating raw as a healthy snack.' },
    { id: 4, name: 'Broccoli Florets 300g', price: 13.99, category: 'vegetables', icon: '🥦', image: './Broccoli-Florets-300g_result.jpg', description: 'Fresh green broccoli, packed with vitamins and perfect for healthy meals.' },
    { id: 5, name: 'Beef Rump Steak 700g', price: 89.99, category: 'meat', icon: '🥩', image: './Beef-Rump-Steak-Avg-700-g_result.jpg', description: 'High-quality beef cuts, perfect for grilling or roasting.' },
    { id: 6, name: 'Full Cream Milk 6 Pack', price: 85.49, category: 'dairy', icon: '🥛', image: './full cream milk 6pack_result.jpg', description: 'Fresh whole milk, rich in calcium and essential nutrients.' },
    { id: 7, name: 'Parmalat Cheese 400g', price: 26.99, category: 'dairy', icon: '🧀', image: './parmalat cheese 400g_result.jpg', description: 'Aged cheddar cheese, perfect for sandwiches or cooking.' },
    { id: 8, name: 'Lays Classic Chips 236.8g', price: 19.99, category: 'snacks', icon: '🍿', image: './lays chips_result.jpg', description: 'Crispy and delicious potato chips, perfect for snacking.' },
    { id: 9, name: 'Orange Juice 1L', price: 27.99, category: 'beverages', icon: '🥤', image: './orange juice_result.jpg', description: 'Fresh squeezed orange juice, packed with vitamin C.' },
    { id: 10, name: 'Strawberries 250g', price: 15.99, category: 'fruits', icon: '🍓', image: './Strawberries-250g_result.jpg', description: 'Sweet and juicy strawberries, perfect for desserts or smoothies.' },
    { id: 11, name: 'Lettuce 400g', price: 18.49, category: 'vegetables', icon: '🥬', image: './lettuce_result.jpg', description: 'Fresh crisp lettuce, perfect for salads and sandwiches.' },
    { id: 12, name: 'Chicken Breast 330g', price: 82.99, category: 'meat', icon: '🍗', image: './chicken-starpack_result.jpg', description: 'Lean chicken breast, perfect for healthy protein-rich meals.' },
    { id: 13, name: 'Strawberries 250g', price: 17.99, category: 'fruits', icon: '🍓', image: './Strawberries-250g_result.jpg', description: 'Sweet 250g pack of fresh strawberries.' },
    { id: 14, name: 'Lays Cheddar Chips 236.8g', price: 19.99, category: 'snacks', icon: '🍿', image: './lays chips 2_result.jpg', description: 'Crispy and delicious potato chips, perfect for snacking.' },
    { id: 15, name: 'Liqui Pruit Pineapple Juice 1L', price: 27.99, category: 'beverages', icon: '🥤', image: './liqui fruit apple juice_result.jpg', description: 'Fresh squeezed pineapple juice, packed with vitamin C.' },
    { id: 16, name: 'Mango & Orange fruit Juice 1L', price: 23.99, category: 'beverages', icon: '🥤', image: './mango juice_result.jpg', description: 'Fresh squeezed mango & orange juice, packed with vitamin C.' },
    { id: 17, name: 'Fanta Grape Drink 2L', price: 23.99, category: 'beverages', icon: '🥤', image: './Fanta Grape Drink-2L_result.jpg', description: 'Fresh grape soft drink, packed with vitamin C.' },
    { id: 18, name: 'Fanta Berry 300ML', price: 11.99, category: 'beverages', icon: '🥤', image: './FANTA BERRY 300ML_result.jpg', description: 'Fresh squeezed apple juice, packed with vitamin C.' },
    { id: 19, name: 'Fanta Orange Drink 2L', price: 23.99, category: 'beverages', icon: '🥤', image: './FANTA DRINK 2L_result.jpg', description: 'Fresh squeezed apple juice, packed with vitamin C.' },
    { id: 20, name: 'Coca Cola 300ML', price: 10.99, category: 'beverages', icon: '🥤', image: './COCA COLA ORINGINAL SOFT DRINK CAN_result.jpg', description: 'Fresh fizzy soft drink.' },
    { id: 21, name: 'Coca Cola 2L', price: 23.99, category: 'beverages', icon: '🥤', image: './COCA COLA_result.jpg', description: 'Fresh fizzy soft drink.' },
    { id: 22, name: 'Mixed Berries 300g', price: 15.99, category: 'fruits', icon: '🍓', image: './Mixed-Berries-300g_result.jpg', description: 'Sweet and juicy berries, perfect for desserts or smoothies.' },
    { id: 23, name: 'Beef Wors  1.2kg', price: 89.99, category: 'meat', icon: '🥩', image: './Beef wors 1.2kg_result.jpg', description: 'High-quality beef wors, perfect for grilling or roasting.' },
    { id: 24, name: 'Cadbury P.S Milk Chocolate 45.8g', price: 5.99, category: 'dairy', icon: '🥛', image: './cadbury ps milk chocolate_result.jpg', description: 'Fresh whole milk, rich in caraml chocolate and essential nutrients.' },
    { id: 25, name: 'Cadbury LunchBar Chocolate 66.8g', price: 13.99, category: 'dairy', icon: '🥛', image: './CADBURY-LUNCHBAR-MAN-SIZE-62g_result.jpg', description: 'Fresh whole milk, rich in crunchy chocolate and essential nutrients.' },
    { id: 26, name: 'Dairy Milk Mint Crisp 80g', price: 17.99, category: 'dairy', icon: '🥛', image: './dairy milk mint crisp_result.jpg', description: 'Fresh whole milk, rich in fresh  mint chocolate and essential nutrients.' },
    { id: 27, name: 'Dairy Milk Whole Nut 80g', price: 17.99, category: 'dairy', icon: '🥛', image: './dairy milk whole nut_result.jpg', description: 'Fresh whole milk, rich in crunchy chocolate and essential nutrients.' },
    { id: 28, name: 'Doritos Grilled BBQ 230.g', price: 15.99, category: 'snacks', icon: '🍿', image: './doritos BBQ_result.jpg', description: 'Crispy and delicious crunchy BBQ corn chips, perfect for snacking.' },
    { id: 29, name: 'Doritos Cheese 230.g', price: 15.99, category: 'snacks', icon: '🍿', image: './DORITOS CHEESE_result.jpg', description: 'Crispy and delicious crunchy cheese corn chips, perfect for snacking.' },
    { id: 30, name: 'Doritos Sweet chilliPepper 230.g', price: 15.99, category: 'snacks', icon: '🍿', image: './DORITOS_result.jpg', description: 'Crispy and delicious crunchy spicy corn chips, perfect for snacking.' },
    { id: 31, name: 'Fresh Pineapple', price: 24.99, category: 'fruits', icon: '🍎', image: './fresh pine apple_result.jpg', description: 'Fresh and fresh pineapple, perfect for snacking or baking.' },
    { id: 32, name: 'Fresh Green Apple 1kg', price: 34.99, category: 'fruits', icon: '🍎', image: './GREEN APPLE_result.jpg', description: 'Fresh and crispy green apples, perfect for snacking or baking.' },
    { id: 33, name: 'Fressh Green Grapes 560g', price: 21.99, category: 'fruits', icon: '🍎', image: './GREEN GRAPES_result.jpg', description: 'Fresh green grapes, perfect for snacking or baking.' },
    { id: 34, name: 'ALbany White Bread 700g', price: 13.99, category: 'bakery', icon: '🧁', image: './p2_result.jpg', description: 'Delicious soft bread, perfect for breakfast or tea.' },
    { id: 35, name: 'Big Muffins 6 Pack', price: 34.99, category: 'bakery', icon: '🧁', image: './Big Muffins 6 Pack_result.jpg', description: 'Delicious soft muffins, perfect for breakfast or tea.' },
    { id: 36, name: 'Big Muffins 4 Pack', price: 28.99, category: 'bakery', icon: '🧁', image: './Big Muffins 4 Pack_result.jpg', description: 'Delicious soft muffins, perfect for breakfast or tea.' },
    { id: 37, name: 'Butternut 2.5kg Bag', price: 19.99, category: 'vegetables', icon: '🎃', image: './Butternut 2.5kg Bag_result.jpg', description: 'Sweet and versatile butternut for soups or roasting.' },
    { id: 38, name: 'Avocado Bag 1kg', price: 39.99, category: 'fruits', icon: '🥑', image: './Avocado Bag_result.jpg', description: 'Creamy ripe avocados, perfect for toast or salads.' },
    { id: 39, name: 'Baby Marrow 400g', price: 16.99, category: 'vegetables', icon: '🥒', image: 'Baby Marrow 500g_result.jpg', description: 'Tender baby marrows, great for roasting or stir-fry.' },
    { id: 40, name: 'Tomato 1kg Bag', price: 16.49, category: 'vegetables', icon: '🍅', image: './Tomato 1kg Bag_result.jpg', description: 'Juicy red tomatoes, perfect for cooking or salads.' },
    { id: 41, name: 'Roma Tomatoes 1kg', price: 20.99, category: 'vegetables', icon: '🍅', image: './Roma Tomatoes 1kg_result.jpg', description: 'Juicy Roma tomatoes, ideal for sauces.' },
    { id: 42, name: 'Baked Beans 410g', price: 11.99, category: 'canned', icon: '🥫', image: './Baked Beans koo_result.jpg', description: 'Classic canned baked beans in tomato sauce.' },
    { id: 43, name: 'Goldi Chicken Mixed Portions 5kg', price: 99.99, category: 'meat', icon: '🍖', image: './Goldi Chicken Mixed Portions_result.jpg', description: 'Frozen chicken portions, great for stews and grilling.' },
    { id: 44, name: 'Knorr Soup Minestrone 50g', price: 13.49, category: 'pantry', icon: '🥣', image: './Knorr Soup Mnestrone_result.jpg', description: 'Instant soup mix for warm and hearty meals.' },
    { id: 45, name: 'Knorr Soup Cream Of Chicken 50g', price: 13.49, category: 'pantry', icon: '🥣', image: './Knorr Soup Cream Of Chicken_result.jpg', description: 'Instant soup mix for warm and hearty meals.' },
    { id: 46, name: 'McCain Garden Peas 750g', price: 33.49, category: 'frozen', icon: '🧊', image: './Frozen Peas_result.jpg', description: 'Tender frozen peas, ideal for cooking or steaming.' },
    { id: 47, name: 'Clover Classic Yogurt 1kg', price: 49.99, category: 'dairy', icon: '🍦', image: './Clover Classic Yogurt_result.jpg', description: 'Smooth and creamy yogurt multipack for the family.' },
    { id: 48, name: 'classic_strawberry 6 x 100g', price: 29.99, category: 'dairy', icon: '🍦', image: './classic_strawberry 6 x 100g_result.jpg', description: 'Smooth and creamy yogurt multipack for the family.' },
    { id: 49, name: 'Clover Classic Yogurt vanilla 1kg', price: 49.99, category: 'dairy', icon: '🍦', image: './Clover Classic Yogurt vanilla_result.jpg', description: 'Smooth and creamy yogurt multipack for the family.' },
    { id: 50, name: 'Parmalat Yogurt 1kg', price: 49.99, category: 'dairy', icon: '🍦', image: './p5_result.jpg', description: 'Smooth and creamy yogurt multipack for the family.' },
    { id: 51, name: 'Clover Gouda Cheese 800g', price: 42.99, category: 'dairy', icon: '🧀', image: './Clover Gouda Cheese 800g_result.jpg', description: 'Mild and creamy Gouda cheese block for slicing or melting.' },
    { id: 52, name: 'Crosse & Blackwell Mayonnaise 750g', price: 26.99, category: 'condiments', icon: '🥪', image: './Crosse & Blackwell Mayonnaise 750g_result.jpg', description: 'Creamy mayonnaise for sandwiches and salads.' },
    { id: 53, name: 'Fatti’s & Moni’s Macaroni 500g', price: 17.99, category: 'pantry', icon: '🍝', image: './Fatti’s & Moni’s Macaroni 500g_result.jpg', description: 'Top quality macaroni for classic pasta dishes.' },
    { id: 54, name: 'Simba Creamy Cheddar 230g', price: 15.99, category: 'snacks', icon: '🍿', image: './SIMBA CREAMY CHEDDAR_result.jpg', description: 'Crispy and delicious cheese potato chips, perfect for snacking.' },
    { id: 55, name: 'Simba Salt & Vinegar 120g', price: 15.99, category: 'snacks', icon: '🍿', image: './SIMBA-CHIPS-SALT-VINEGAR-120g_result.jpg', description: 'Crispy and delicious salt & vinegar potato chips, perfect for snacking.' },
    { id: 56, name: 'Simba Smoked Beef 230g', price: 15.99, category: 'snacks', icon: '🍿', image: './simba-smoked-beef_result.jpg', description: 'Crispy and delicious smoked beef potato chips, perfect for snacking.' },
    { id: 57, name: 'Simba Tomato Sauce', price: 15.99, category: 'snacks', icon: '🍿', image: './simba-tomato-sauce_result.jpg', description: 'Crispy and delicious Tomato Sauce potato chips, perfect for snacking.' },
    { id: 58, name: 'Sprite Lemon 2L', price: 23.99, category: 'beverages', icon: '🥤', image: './SPRITE LEMON 2L_result.jpg', description: 'Fresh fizzy lemon soft drink.' },
    { id: 59, name: 'Sprite 300ml', price: 11.99, category: 'beverages', icon: '🥤', image: './Sprite_300ml_result.jpg', description: 'Fresh fizzy lemon soft drink.' },
    { id: 60, name: 'Fanta Orange Drink 2L', price: 23.99, category: 'beverages', icon: '🥤', image: './FANTA DRINK 2L_result.jpg', description: 'Fresh fizzy orange soft drink, packed with vitamin C.' },
    { id: 61, name: 'Fanta Grape Drink 2L', price: 23.99, category: 'beverages', icon: '🥤', image: './Fanta Grape Drink-2L_result.jpg', description: 'Fresh fizzy grape soft drink, packed with vitamin C.' },
    { id: 63, name: 'Chocolate Cake', price: 120.99, category: 'bakery', icon: '🧁', image: './p15_result.jpg', description: 'Delicious soft chocolate cake, perfect for birthdays.' },
    { id: 64, name: 'pears 1.5kg', price: 34.99, category: 'fruits', icon: '🍎', image: './pears 1.5kg_result.jpg', description: 'Fresh and crispy green pears, perfect for snacking or baking.' },
    { id: 65, name: 'ALbany Brown Bread 700g', price: 13.99, category: 'bakery', icon: '🧁', image: './albany brown bread_result.jpg', description: 'Delicious healthy bread, perfect for breakfast or tea.' },
    { id: 66, name: 'Sasko White bread 700g', price: 12.99, category: 'bakery', icon: '🧁', image: './sasko white bread_result.jpg', description: 'Delicious soft bread, perfect for breakfast or tea.' },
    { id: 67, name: 'Sasko Brown Bread 700g', price: 12.99, category: 'bakery', icon: '🧁', image: './sasko brown bread_result.jpg', description: 'Delicious healthy bread, perfect for breakfast or tea.' },
    { id: 68, name: 'Long Life Milk 6 Pack', price: 83.49, category: 'dairy', icon: '🥛', image: './Long Life Milk 6 Pack_result.jpg', description: 'Fresh whole milk, rich in calcium and essential nutrients.' },
    { id: 69, name: 'Clover Full Cream Milk', price: 85.49, category: 'dairy', icon: '🥛', image: './clover full cream milk_result.jpg', description: 'Fresh whole milk, rich in calcium and essential nutrients.' },


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
                <div class="product-image">
                <img src="${product.image}" alt="${product.name}" />
                </div>
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

    document.getElementById('detail-image').innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}" />`;
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
                <div class="cart-item-image">
                  <img src="${item.image}" alt="${item.name}" />
                </div>
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
