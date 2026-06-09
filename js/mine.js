// 获取元素
const avatarWrap = document.getElementById('avatarWrap');
const usernameEl = document.getElementById('username');
const avatarEl = document.getElementById('avatar');

const nameModal = document.getElementById('nameModal');
const newNameInput = document.getElementById('newNameInput');
const cancelNameBtn = document.getElementById('cancelNameBtn');
const confirmNameBtn = document.getElementById('confirmNameBtn');

const avatarModal = document.getElementById('avatarModal');
const cancelAvatarBtn = document.getElementById('cancelAvatarBtn');
const confirmAvatarBtn = document.getElementById('confirmAvatarBtn');
const avatarOptions = document.querySelectorAll('.avatar-option');

let selectedAvatarColor = '#bde978';

// 打开昵称弹窗
usernameEl.addEventListener('click', () => {
    newNameInput.value = usernameEl.textContent;
    nameModal.classList.add('show');
});

// 昵称弹窗取消
cancelNameBtn.addEventListener('click', () => {
    nameModal.classList.remove('show');
});

// 昵称弹窗确认
confirmNameBtn.addEventListener('click', () => {
    const newName = newNameInput.value.trim();
    if (newName) {
        usernameEl.textContent = newName;
    }
    nameModal.classList.remove('show');
});

// 打开头像弹窗
avatarWrap.addEventListener('click', () => {
    avatarModal.classList.add('show');
});

// 头像弹窗取消
cancelAvatarBtn.addEventListener('click', () => {
    avatarModal.classList.remove('show');
});

// 头像选项点击
avatarOptions.forEach(option => {
    option.addEventListener('click', () => {
        avatarOptions.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        if (!option.classList.contains('upload')) {
            selectedAvatarColor = option.style.background;
        }
    });
});

// 头像弹窗确认
confirmAvatarBtn.addEventListener('click', () => {
    avatarEl.style.background = selectedAvatarColor;
    avatarModal.classList.remove('show');
});

// 底部导航高亮逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面文件名
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // 遍历所有导航项
    document.querySelectorAll('.tab-item').forEach(item => {
        // 移除所有active类
        item.classList.remove('active');
        // 给当前页面对应的导航项加上active
        if (item.getAttribute('href') === `${currentPage}.html`) {
            item.classList.add('active');
        }
    });
});