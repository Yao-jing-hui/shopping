document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.product-detail-modal');
    const closeModal = document.querySelector('.close-modal');
    const quantityInput = document.querySelector('.quantity-selector input');
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');

    // 关闭模态框
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 数量选择器功能
    decreaseBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });

    // 商品卡片点击事件
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;

            // 更新模态框内容
            modal.querySelector('img').src = img;
            modal.querySelector('h2').textContent = title;
            modal.querySelector('.price').textContent = price;

            // 显示模态框
            modal.style.display = 'flex';
        });
    });

    // 加入购物车功能
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const product = {
                title: btn.closest('.product-info').querySelector('h3').textContent,
                price: btn.closest('.product-info').querySelector('.price').textContent,
                quantity: 1
            };
            addToCart(product);
        });
    });

    // 立即购买功能
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // 这里可以添加跳转到结算页面的逻辑
            console.log('立即购买');
        });
    });
});

// 购物车功能
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('已添加到购物车');
} 