document.addEventListener('DOMContentLoaded', function() {
    // 标签切换功能
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            // 这里可以添加根据标签筛选评论的逻辑
        });
    });

    // 点赞功能
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const count = parseInt(this.textContent.match(/\d+/)[0]);
            this.textContent = `👍 有用(${count + 1})`;
            this.disabled = true;
        });
    });

    // 回复功能
    const replyButtons = document.querySelectorAll('.reply-btn');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reviewItem = this.closest('.review-item');
            const replyForm = document.createElement('div');
            replyForm.className = 'reply-form';
            replyForm.innerHTML = `
                <textarea placeholder="写下你的回复..."></textarea>
                <div class="reply-actions">
                    <button class="cancel-reply">取消</button>
                    <button class="submit-reply">提交</button>
                </div>
            `;
            reviewItem.appendChild(replyForm);

            // 取消回复
            replyForm.querySelector('.cancel-reply').addEventListener('click', () => {
                replyForm.remove();
            });

            // 提交回复
            replyForm.querySelector('.submit-reply').addEventListener('click', () => {
                const replyText = replyForm.querySelector('textarea').value;
                if (replyText.trim()) {
                    const replyElement = document.createElement('div');
                    replyElement.className = 'reply-content';
                    replyElement.innerHTML = `
                        <div class="reply-header">
                            <span class="reply-username">商家回复：</span>
                            <span class="reply-time">${new Date().toLocaleString()}</span>
                        </div>
                        <p class="reply-text">${replyText}</p>
                    `;
                    reviewItem.insertBefore(replyElement, replyForm);
                    replyForm.remove();
                }
            });
        });
    });

    // 分页功能
    const prevPage = document.querySelector('.prev-page');
    const nextPage = document.querySelector('.next-page');
    const pageInfo = document.querySelector('.page-info');
    let currentPage = 1;
    const totalPages = 10;

    prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    });

    nextPage.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePage();
        }
    });

    function updatePage() {
        pageInfo.textContent = `${currentPage}/${totalPages}`;
        // 这里可以添加加载对应页码评论的逻辑
    }
}); 