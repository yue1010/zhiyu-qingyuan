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

// 歌曲列表
const songLists = {
    anger: [
        { title: "Release Anger", artist: "By: Meditation Hub", tag: "释放愤怒", cover: "linear-gradient(135deg, #ff6b6b 0%, #ff8fab 50%, #ff6b6b 100%)" },
        { title: "Calm Down", artist: "By: Lofi Girl", tag: "愤怒舒缓", cover: "linear-gradient(135deg, #ff9999 0%, #cc0000 50%, #ff9999 100%)" },
        { title: "Peaceful Mind", artist: "By: Relaxing Music", tag: "情绪平复", cover: "linear-gradient(135deg, #ffcccc 0%, #ff3333 50%, #ffcccc 100%)" }
    ],
    default: [
        { title: "Under The Rain", artist: "By: Sarah Wins", tag: "治愈系", cover: "linear-gradient(135deg, #ffccd5 0%, #ff8fab 50%, #ffc2e2 100%)" }
    ]
};

let currentEmotion = 'default';
let currentSongIndex = 0;
let isPlaying = false;
let progressInterval = null;
let likedSongs = new Set();

// 格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 更新歌曲信息
function updateSongInfo() {
    const songList = songLists[currentEmotion] || songLists.default;
    const currentSong = songList[currentSongIndex];
    songTitleEl.textContent = currentSong.title;
    songArtistEl.textContent = currentSong.artist;
    songTagEl.textContent = currentSong.tag;
    coverBgEl.style.background = currentSong.cover;
    
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

// 重置进度条
function resetProgress() {
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '00:00';
    if (progressInterval) clearInterval(progressInterval);
}

// 启动进度条
function startProgress() {
    const totalSeconds = 200;
    totalTimeEl.textContent = formatTime(totalSeconds);
    let currentSeconds = 0;
    progressInterval = setInterval(() => {
        if (!isPlaying) return;
        currentSeconds += 0.1;
        const progress = (currentSeconds / totalSeconds) * 100;
        if (progress >= 100) {
            nextSong();
            return;
        }
        progressFill.style.width = `${progress}%`;
        currentTimeEl.textContent = formatTime(currentSeconds);
    }, 100);
}

// 播放/暂停
function togglePlay() {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? '| |' : '▶';
    if (isPlaying) startProgress();
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
        // 初始状态为播放，按钮为暂停符号
        isPlaying = true;
        playBtn.textContent = '| |';
        startProgress();
    });
});

// 关闭弹窗
closeBtn.addEventListener('click', () => {
    musicModal.classList.remove('active');
    isPlaying = false;
    playBtn.textContent = '▶';
    if (progressInterval) clearInterval(progressInterval);
});

// 按钮事件绑定
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
likeBtn.addEventListener('click', toggleLike);

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