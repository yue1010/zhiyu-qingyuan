const cards = document.querySelectorAll('.emotion-card');
const musicModal = document.getElementById('musicModal');
const closeBtn = document.getElementById('closeBtn');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const likeBtn = document.getElementById('likeBtn');
const progressFill = document.querySelector('.progress-fill');
const currentTimeEl = document.querySelector('.current-time');
const totalTimeEl = document.querySelector('.total-time');
const songTitleEl = document.querySelector('.song-title');
const songArtistEl = document.querySelector('.song-artist');
const songTagEl = document.querySelector('.song-tag');
const coverBgEl = document.querySelector('.cover-bg');
const albumCover = document.querySelector('.album-cover');

// 歌曲列表 - 新增 coverImg 字段（替换为实际图片路径/URL）
const songLists = {
    anger: [
        { 
            title: "Release Anger", 
            artist: "By: Meditation Hub", 
            tag: "释放愤怒", 
            cover: "linear-gradient(135deg, #ff6b6b 0%, #ff8fab 50%, #ff6b6b 100%)",
            coverImg: "./image/3.jpg"
        },
        { 
            title: "Calm Down", 
            artist: "By: Lofi Girl", 
            tag: "愤怒舒缓", 
            cover: "linear-gradient(135deg, #ff9999 0%, #cc0000 50%, #ff9999 100%)",
            coverImg: "./image/6.jpg"
        },
        { 
            title: "Peaceful Mind", 
            artist: "By: Relaxing Music", 
            tag: "情绪平复", 
            cover: "linear-gradient(135deg, #ffcccc 0%, #ff3333 50%, #ffcccc 100%)",
            coverImg: "./image/2.jpg"
        }
    ],
    anxiety: [
        { 
            title: "Anxiety Relief", 
            artist: "By: Calm Music", 
            tag: "缓解焦虑", 
            cover: "linear-gradient(135deg, #fff8d9 0%, #cc8822 50%, #fff8d9 100%)",
            coverImg: "./image/6.jpg"
        },
        { 
            title: "Stress Away", 
            artist: "By: Calm Beats", 
            tag: "放松神经", 
            cover: "linear-gradient(135deg, #fff2cc 0%, #ffbb33 50%, #fff2cc 100%)",
            coverImg: "./image/4.jpg"
        },
        { 
            title: "Clear Thoughts", 
            artist: "By: Mindful Sounds", 
            tag: "思绪清明", 
            cover: "linear-gradient(135deg, #fff9e6 0%, #ffcc66 50%, #fff9e6 100%)",
            coverImg: "./image/7.jpg"
        }
    ],
    sad: [
        { 
            title: "Sad Healing", 
            artist: "By: Soft Piano", 
            tag: "委屈治愈", 
            cover: "linear-gradient(135deg, #e8f4ff 0%, #3377cc 50%, #e8f4ff 100%)",
            coverImg: "./image/2.jpg"
        },
        { 
            title: "Let It Go", 
            artist: "By: Gentle Strings", 
            tag: "情绪释放", 
            cover: "linear-gradient(135deg, #d9e8ff 0%, #4488dd 50%, #d9e8ff 100%)",
            coverImg: "./image/9.jpg"
        },
        { 
            title: "Warm Embrace", 
            artist: "By: Comfort Tones", 
            tag: "温柔抚慰", 
            cover: "linear-gradient(135deg, #cce0ff 0%, #5599ee 50%, #cce0ff 100%)",
            coverImg: "./image/1.jpg"
        }
    ],
    defeat: [
        { 
            title: "Rebuild Hope", 
            artist: "By: Inspiring Music", 
            tag: "重拾信心", 
            cover: "linear-gradient(135deg, #f0f7f0 0%, #556666 50%, #f0f7f0 100%)",
            coverImg: "./image/6.jpg"
        },
        { 
            title: "New Beginnings", 
            artist: "By: Motivational Beats", 
            tag: "整装再发", 
            cover: "linear-gradient(135deg, #e6efeb 0%, #667777 50%, #e6efeb 100%)",
            coverImg: "./image/3.jpg"
        },
        { 
            title: "Step Forward", 
            artist: "By: Forward Sounds", 
            tag: "稳步前行", 
            cover: "linear-gradient(135deg, #e0ebe5 0%, #778888 50%, #e0ebe5 100%)",
            coverImg: "./image/4.jpg"
        }
    ],
    calm: [
        { 
            title: "Inner Peace", 
            artist: "By: Nature Sounds", 
            tag: "内心平静", 
            cover: "linear-gradient(135deg, #e8f7e8 0%, #2d884a 50%, #e8f7e8 100%)",
            coverImg: "./image/4.jpg"
        },
        { 
            title: "Still Waters", 
            artist: "By: Forest Melodies", 
            tag: "心如止水", 
            cover: "linear-gradient(135deg, #dcf0dc 0%, #339955 50%, #dcf0dc 100%)",
            coverImg: "./image/7.jpg"
        },
        { 
            title: "Tranquil Mind", 
            artist: "By: Calm Waves", 
            tag: "宁静致远", 
            cover: "linear-gradient(135deg, #d0e8d0 0%, #44aa66 50%, #d0e8d0 100%)",
            coverImg: "./image/5.jpg"
        }
    ],
    relax: [
        { 
            title: "Deep Relax", 
            artist: "By: Ambient Music", 
            tag: "深度放松", 
            cover: "linear-gradient(135deg, #f0f5f5 0%, #2288cc 50%, #f0f5f5 100%)",
            coverImg: "./image/5.jpg"
        },
        { 
            title: "Body & Soul", 
            artist: "By: Spa Tones", 
            tag: "身心舒缓", 
            cover: "linear-gradient(135deg, #e6f0f5 0%, #3399dd 50%, #e6f0f5 100%)",
            coverImg: "./image/8.jpg"
        },
        { 
            title: "Light & Easy", 
            artist: "By: Breezy Beats", 
            tag: "轻松一刻", 
            cover: "linear-gradient(135deg, #dceaf5 0%, #44aadd 50%, #dceaf5 100%)",
            coverImg: "./image/7.jpg"
        }
    ],
    heal: [
        { 
            title: "Soul Heal", 
            artist: "By: Healing Tones", 
            tag: "灵魂治愈", 
            cover: "linear-gradient(135deg, #eaf9ef 0%, #229977 50%, #eaf9ef 100%)",
            coverImg: "./image/1.jpg"
        },
        { 
            title: "Light Within", 
            artist: "By: Hope Melodies", 
            tag: "内心之光", 
            cover: "linear-gradient(135deg, #dcf7e4 0%, #33aa88 50%, #dcf7e4 100%)",
            coverImg: "./image/9.jpg"
        },
        { 
            title: "Heart Mender", 
            artist: "By: Warm Harmonies", 
            tag: "温柔疗愈", 
            cover: "linear-gradient(135deg, #d0f2dd 0%, #44bb99 50%, #d0f2dd 100%)",
            coverImg: "./image/8.jpg"
        }
    ],
    peace: [
        { 
            title: "Total Peace", 
            artist: "By: Meditation Music", 
            tag: "全然安心", 
            cover: "linear-gradient(135deg, #f5f5f5 0%, #8855aa 50%, #f5f5f5 100%)",
            coverImg: "./image/7.jpg"
        },
        { 
            title: "Safe & Sound", 
            artist: "By: Comfort Beats", 
            tag: "安心港湾", 
            cover: "linear-gradient(135deg, #ebe6f0 0%, #9966bb 50%, #ebe6f0 100%)",
            coverImg: "./image/5.jpg"
        },
        { 
            title: "No Worries", 
            artist: "By: Carefree Sounds", 
            tag: "无忧时刻", 
            cover: "linear-gradient(135deg, #e6e0eb 0%, #aa77cc 50%, #e6e0eb 100%)",
            coverImg: "./image/1.jpg"
        }
    ],
    default: [
        { 
            title: "Under The Rain", 
            artist: "By: Sarah Wins", 
            tag: "治愈系", 
            cover: "linear-gradient(135deg, #ffccd5 0%, #ff8fab 50%, #ffc2e2 100%)",
            coverImg: "./image/1.jpg"
        }
    ]
};

let currentEmotion = 'default';
let currentSongIndex = 0;
let isPlaying = false;
let progressInterval = null;
let currentSeconds = 0;
let totalSeconds = 200; // 模拟歌曲总时长（秒）
let likedSongs = new Set();

// 格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateSongInfo() {
    const songList = songLists[currentEmotion] || songLists.default;
    const currentSong = songList[currentSongIndex];
    songTitleEl.textContent = currentSong.title;
    songArtistEl.textContent = currentSong.artist;
    songTagEl.textContent = currentSong.tag;

    // 1. 设置背景图片
    coverBgEl.style.backgroundImage = `url(${currentSong.coverImg})`;
    // 2. 放大 130%（你可以改成 120%/140% 调整饱满度）
    coverBgEl.style.backgroundSize = '108%';
    // 3. 水平位置往右偏移 10%，让主体居中
    coverBgEl.style.backgroundPosition = '65% 50%';
    coverBgEl.style.backgroundRepeat = 'no-repeat';
    coverBgEl.style.backgroundBlendMode = 'normal';

    // 更新收藏状态
    const songKey = `${currentEmotion}-${currentSongIndex}`;
    if (likedSongs.has(songKey)) {
        likeBtn.classList.add('active');
        likeBtn.textContent = '❤️';
    } else {
        likeBtn.classList.remove('active');
        likeBtn.textContent = '🤍';
    }
}

// 彻底重置进度 & 清除定时器
function resetProgress() {
    // 先清定时器，防止叠加
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    currentSeconds = 0;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '00:00';
    totalTimeEl.textContent = formatTime(totalSeconds);
}

// 启动进度条（使用整数步进，消除浮点误差）
function startProgress() {
    if (progressInterval) return; // 已有定时器则不重复创建

    progressInterval = setInterval(() => {
        if (!isPlaying) return;

        currentSeconds += 1; // 1秒步进，无浮点误差
        const progress = (currentSeconds / totalSeconds) * 100;

        progressFill.style.width = `${progress}%`;
        currentTimeEl.textContent = formatTime(currentSeconds);

        // 播放结束自动下一首
        if (currentSeconds >= totalSeconds) {
            nextSong();
        }
    }, 1000);
}

function togglePlay() {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? '| |' : '▶';
    
    if (isPlaying) {
        albumCover.classList.add('playing');
        startProgress();
    } else {
        albumCover.classList.remove('playing');
    }
}

// 上一首/下一首
function prevSong() {
    const songList = songLists[currentEmotion] || songLists.default;
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    resetProgress();
    updateSongInfo();
    if (isPlaying) startProgress();
}
function nextSong() {
    const songList = songLists[currentEmotion] || songLists.default;
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    resetProgress();
    updateSongInfo();
    if (isPlaying) startProgress();
}

// 收藏切换
function toggleLike() {
    const songKey = `${currentEmotion}-${currentSongIndex}`;
    if (likedSongs.has(songKey)) {
        likedSongs.delete(songKey);
        likeBtn.classList.remove('active');
        likeBtn.textContent = '🤍';
    } else {
        likedSongs.add(songKey);
        likeBtn.classList.add('active');
        likeBtn.textContent = '❤️';
    }
}

// 点击情绪卡片打开弹窗
cards.forEach(card => {
    card.addEventListener('click', () => {
        currentEmotion = card.dataset.emotion || 'default';
        currentSongIndex = 0;
        resetProgress();
        updateSongInfo();
        musicModal.classList.add('active');
        albumCover.classList.add('playing');
        // 初始状态为播放，按钮为暂停符号
        isPlaying = true;
        playBtn.textContent = '| |';
        startProgress();
    });
});

// 关闭弹窗
closeBtn.addEventListener('click', () => {
    musicModal.classList.remove('active');
    albumCover.classList.remove('playing');
    isPlaying = false;
    playBtn.textContent = '▶';
    if (progressInterval) clearInterval(progressInterval);
});

// 按钮事件绑定
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
likeBtn.addEventListener('click', toggleLike);

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(item => {
        const href = item.getAttribute('href');
        // 匹配当前页面 → 加active；不匹配 → 才移除
        if (href === `${currentPage}.html`) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// ========= 统一登录拦截（所有功能页通用） =========
const loginTip = document.getElementById("loginTip");
const tipClose = document.querySelector(".tip-close");
const wrap = document.querySelector(".phone-box");

// 关闭登录提示
tipClose.addEventListener("click", () => {
    loginTip.classList.remove("show");
});

// 实时获取登录状态
function getLoginStatus() {
    return localStorage.getItem("isLogin") === "1";
}

// 全局点击拦截
wrap.addEventListener("click", (e) => {
    const isLogin = getLoginStatus();
    // 已登录：放行所有操作
    if (isLogin) return;

    // 排除弹窗自身点击
    if (loginTip.contains(e.target)) return;

    // 游客：拦截操作 + 弹出提示
    e.preventDefault();
    e.stopPropagation();
    loginTip.classList.add("show");
});
