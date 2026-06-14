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
const avatarOptions = document.querySelectorAll('.avatar-option:not(.upload)');
const uploadBtn = document.getElementById('uploadBtn');
const avatarFile = document.getElementById('avatarFile');

// 内置头像图片列表
const avatarImages = [
    'image/10.jpg',
    'image/11.jpg',
    'image/12.jpg'
];

let selectedAvatarIndex = 0;
let tempAvatarSrc = "";

// ========== 页面初始化：读取本地存储数据 ==========
window.addEventListener('DOMContentLoaded', function () {
    // 读取昵称
    const saveName = localStorage.getItem('userNickname');
    if (saveName) {
        usernameEl.textContent = saveName;
    }

    // 读取头像
    const saveAvatar = localStorage.getItem('userAvatar');
    if (saveAvatar) {
        avatarEl.src = saveAvatar;
        tempAvatarSrc = saveAvatar;
    }

    // 底部导航高亮
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    document.querySelectorAll('.tab-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `${currentPage}.html`) {
            item.classList.add('active');
        }
    });

    // 游客状态隐藏退出按钮
    const isLogin = localStorage.getItem("isLogin") === "1";
    if (!isLogin) {
        document.getElementById('logoutBtn').style.display = "none";
    }
});

// ========== 昵称修改（保存到本地） ==========
// 打开昵称弹窗
usernameEl.addEventListener('click', () => {
    newNameInput.value = usernameEl.textContent;
    nameModal.classList.add('show');
});

// 昵称弹窗取消
cancelNameBtn.addEventListener('click', () => {
    nameModal.classList.remove('show');
});

// 昵称弹窗确认 + 持久化
confirmNameBtn.addEventListener('click', () => {
    const newName = newNameInput.value.trim();
    if (newName) {
        usernameEl.textContent = newName;
        // 存入本地存储
        localStorage.setItem('userNickname', newName);
    }
    nameModal.classList.remove('show');
});

// ========== 头像修改（保存到本地） ==========
// 打开头像弹窗
avatarWrap.addEventListener('click', () => {
    avatarModal.classList.add('show');
});

// 头像弹窗取消
cancelAvatarBtn.addEventListener('click', () => {
    avatarModal.classList.remove('show');
});

// 选择内置头像
avatarOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        avatarOptions.forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        selectedAvatarIndex = index;
        tempAvatarSrc = avatarImages[index];
    });
});

// 点击 + 上传头像
uploadBtn.addEventListener('click', () => {
    avatarFile.click();
});

// 读取本地图片预览
avatarFile.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        avatarOptions.forEach(o => o.classList.remove('selected'));
        tempAvatarSrc = event.target.result;
    };
    reader.readAsDataURL(file);
});

// 确认更换头像 + 持久化
confirmAvatarBtn.addEventListener('click', () => {
    if (tempAvatarSrc) {
        avatarEl.src = tempAvatarSrc;
        // 存入本地存储
        localStorage.setItem('userAvatar', tempAvatarSrc);
    }
    avatarModal.classList.remove('show');
});

// ========== 退出登录逻辑 ==========
const logoutBtn = document.getElementById('logoutBtn');
const logoutModal = document.getElementById('logoutModal');
const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
const doLogoutBtn = document.getElementById('doLogoutBtn');

// 打开退出确认弹窗
logoutBtn.addEventListener('click', () => {
    logoutModal.classList.add('show');
});

// 取消退出
cancelLogoutBtn.addEventListener('click', () => {
    logoutModal.classList.remove('show');
});

// 执行退出：同时清空昵称、头像缓存
doLogoutBtn.addEventListener('click', () => {
    localStorage.removeItem("isLogin");
    // 退出登录清空个人资料（可选，不需要就删掉下面两行）
    localStorage.removeItem("userNickname");
    localStorage.removeItem("userAvatar");

    logoutModal.classList.remove('show');
    window.location.href = "login.html";
});