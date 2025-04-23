// 购物车功能
class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadFromLocalStorage();
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
        this.saveToLocalStorage();
        this.updateCartUI();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveToLocalStorage();
        this.updateCartUI();
    }

    updateQuantity(itemId, quantity) {
        const item = this.items.find(i => i.id === itemId);
        if (item) {
            item.quantity = quantity;
            if (quantity <= 0) {
                this.removeItem(itemId);
            }
        }
        this.saveToLocalStorage();
        this.updateCartUI();
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    saveToLocalStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        const savedItems = localStorage.getItem('shoppingCart');
        if (savedItems) {
            this.items = JSON.parse(savedItems);
        }
    }

    updateCartUI() {
        // 更新购物车UI的代码
        const cartItemsElement = document.querySelector('.cart-items');
        if (cartItemsElement) {
            cartItemsElement.innerHTML = this.items.map(item => `
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <h6 class="mb-0">${item.name}</h6>
                        <small class="text-muted">¥${item.price}</small>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <button class="btn btn-sm btn-outline-secondary">${item.quantity}</button>
                        <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// 初始化购物车
const cart = new ShoppingCart();

// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // 实现搜索建议或实时搜索
            console.log('Searching for:', e.target.value);
        });
    }
});

// 表单验证
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // 实现表单验证逻辑
            console.log('Form submitted');
        });
    }
}

// 初始化表单验证
validateForm('loginForm');
validateForm('registerForm');

// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// 响应式导航栏
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
});

// Toast提示
function showToast(message, type = 'success') {
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.innerHTML = `
        <div class="toast align-items-center text-white bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    document.body.appendChild(toastContainer);
    const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
    toast.show();
    toastContainer.addEventListener('hidden.bs.toast', function() {
        toastContainer.remove();
    });
}

// 示例：添加到购物车时显示提示
function addToCart(item) {
    cart.addItem(item);
    showToast('已添加到购物车', 'success');
}