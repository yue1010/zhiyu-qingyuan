// 题库数据：不同分类+难度对应不同题目和评论
const topicData = {
    hot: {
        easy: {
            title: "今日话题：如何看待社交平台上的“情绪泛化”现象？",
            comments: [
                { name: "键盘侠007", text: "现在的年轻人太矫情了，一点小事就破防，真没劲！" },
                { name: "理性观察员", text: "你可以反对观点，但别先给人贴标签。" }
            ],
            quickReplies: [
                "每个人看法不一样，互相理解啦。",
                "每个人都有自己的判断，尊重不同声音。",
                "感谢你的观点，我明白你的意思啦，我们求同存异😊",
                "舒缓难度建议先做到语气平和，再追求观点完整。"
            ]
        },
        mid: {
            title: "今日话题：如何看待“网红滤镜过度美化”现象？",
            comments: [
                { name: "直球选手", text: "现在的网红都不敢信了，照片和真人差十万八千里！" },
                { name: "中立派", text: "爱美之心人皆有之，但过度美化容易误导他人。" }
            ],
            quickReplies: [
                "滤镜是个人选择，只要不涉及虚假宣传就好啦。",
                "真实的样子也很好看，没必要过度追求完美。",
                "平台也应该规范一下，减少虚假信息传播。",
                "进阶难度可以尝试给出建设性的看法。"
            ]
        },
        hard: {
            title: "如何看待“网络暴力”对当事人的影响？",
            comments: [
                { name: "跟风路人", text: "谁让她自己行为不端，活该被骂！" },
                { name: "冷静旁观者", text: "就算有问题，也不该用网络暴力的方式去攻击。" }
            ],
            quickReplies: [
                "网络暴力是违法行为，不应该用伤害他人的方式表达观点。",
                "我们可以批评错误，但不能进行人身攻击和网暴。",
                "平台应该加强监管，遏制网络暴力的蔓延。",
                "高压难度请保持理性，不被情绪带偏。"
            ]
        }
    },
    dispute: {
        easy: {
            title: "职场中遇到“甩锅”同事，你会怎么处理？",
            comments: [
                { name: "委屈新人", text: "凭什么锅都让我背，我又不是背锅侠！" },
                { name: "职场老油条", text: "遇到这种人，一定要留好证据，别被人卖了还帮着数钱。" }
            ],
            quickReplies: [
                "先和对方沟通清楚，说明各自的分工和责任。",
                "保留好相关记录，避免后续出现问题说不清。",
                "如果沟通无效，可以向上级说明情况。",
                "舒缓难度建议先冷静处理，避免正面冲突。"
            ]
        },
        mid: {
            title: "朋友向你吐槽同事，你会怎么回应？",
            comments: [
                { name: "八卦小能手", text: "他也太过分了吧！我早就看他不顺眼了！" },
                { name: "理性好友", text: "吐槽归吐槽，背后说人坏话不太好哦。" }
            ],
            quickReplies: [
                "先倾听对方的情绪，让他把负面情绪发泄出来。",
                "适当安慰就好，不要跟着一起吐槽别人。",
                "可以引导他往解决问题的方向想，而不是单纯抱怨。",
                "进阶难度可以尝试给出建设性建议。"
            ]
        },
        hard: {
            title: "发现朋友在背后说你坏话，你会怎么办？",
            comments: [
                { name: "心碎本人", text: "我把他当好朋友，他居然背后捅我刀子！" },
                { name: "人间清醒", text: "这种朋友不值得深交，保持距离就好。" }
            ],
            quickReplies: [
                "先确认事实，不要轻信传言。",
                "如果是误会，可以当面说清楚。",
                "如果是事实，慢慢疏远就好。",
                "高压难度请保持冷静，避免做出冲动的决定。"
            ]
        }
    },
    debate: {
        easy: {
            title: "你支持“婚前财产公证”吗？",
            comments: [
                { name: "现实主义", text: "必须公证！不然离婚财产都被分走了！" },
                { name: "理想主义", text: "谈钱伤感情，公证就没信任感了。" }
            ],
            quickReplies: [
                "公证是保护双方权益，不是不信任。",
                "婚前公证能避免很多纠纷。",
                "双方接受就没问题。",
                "舒缓难度客观看待即可。"
            ]
        },
        mid: {
            title: "如何看待“躺平”和“内卷”的争议？",
            comments: [
                { name: "躺平选手", text: "卷不动了，躺平不香吗？" },
                { name: "内卷达人", text: "年轻就该努力，躺平就是摆烂。" }
            ],
            quickReplies: [
                "生活方式因人而异，不必互相指责。",
                "躺平不是摆烂，是自我选择。",
                "内卷也要卷得有意义。",
                "进阶难度辩证分析问题。"
            ]
        },
        hard: {
            title: "如何看待“性别对立”的言论？",
            comments: [
                { name: "极端发言者", text: "现在的男/女都不行！" },
                { name: "理性发声者", text: "不能以偏概全。" }
            ],
            quickReplies: [
                "对立言论只会激化矛盾。",
                "尊重每个独立个体。",
                "拒绝极端观点。",
                "高压难度保持中立。"
            ]
        }
    },
    refresh: {
        easy: {
            title: "你觉得“拖延症”能治好吗？",
            comments: [
                { name: "重度拖延", text: "我做事总拖到最后。" },
                { name: "自律达人", text: "拖延本质就是懒。" }
            ],
            quickReplies: [
                "从小习惯慢慢改正。",
                "先找到焦虑根源。",
                "不用急于求成。",
                "舒缓难度多鼓励自己。"
            ]
        },
        mid: {
            title: "如何看待“碎片化学习”？",
            comments: [
                { name: "碎片化学习者", text: "刷视频也能学到东西。" },
                { name: "深度学习者", text: "碎片学习不算真学习。" }
            ],
            quickReplies: [
                "碎片学习可做补充。",
                "知识需要串联成体系。",
                "因人而异选择方式。",
                "进阶难度分析优缺点。"
            ]
        },
        hard: {
            title: "如何看待“网红带货”的争议？",
            comments: [
                { name: "消费者", text: "很多网红卖假货坑粉丝。" },
                { name: "主播粉丝", text: "东西不错，别乱抹黑。" }
            ],
            quickReplies: [
                "带货是正常模式，需要规范。",
                "消费保持理性。",
                "加强平台监管。",
                "高压难度客观分析。"
            ]
        }
    }
};

// 动态反馈配置【新版评分规则，修复满分BUG】
const feedbackConfig = {
    getRationalScore: (inputText, level) => {
        let score = 50;
        const levelWeights = { easy: 3, mid: 0, hard: -3 };
        score += levelWeights[level];

        const rationalKeys = ["客观", "理性", "理解", "尊重", "事实", "依据", "沟通", "求同存异", "辩证", "多角度"];
        rationalKeys.forEach(word => {
            if (inputText.includes(word)) score += 4;
        });

        const emotionBadKeys = ["垃圾", "活该", "都怪", "绝对", "肯定", "必须", "无脑", "全是", "一律", "简直"];
        emotionBadKeys.forEach(word => {
            if (inputText.includes(word)) score -= 8;
        });

        const modalWords = ["啊", "哦", "呢", "吧", "嘛", "咯", "哈"];
        modalWords.forEach(word => {
            if (inputText.includes(word)) score -= 2;
        });

        const len = inputText.length;
        if (len >= 20 && len <= 90) score += 6;
        else if (len < 10) score -= 12;
        else if (len > 110) score -= 6;

        return Math.max(0, Math.min(100, score));
    },

    getEmpathyScore: (inputText, level) => {
        let score = 50;
        const levelWeights = { easy: 3, mid: 0, hard: -3 };
        score += levelWeights[level];

        const empathyKeys = ["感受", "理解", "体谅", "不容易", "辛苦了", "换位思考", "在意", "包容", "换位思考"];
        empathyKeys.forEach(word => {
            if (inputText.includes(word)) score += 5;
        });

        const blameKeys = ["你错了", "怪你", "活该", "不懂", "自私", "差劲", "可笑", "没必要"];
        blameKeys.forEach(word => {
            if (inputText.includes(word)) score -= 9;
        });

        if (/就这|呵呵|无语/.test(inputText)) score -= 10;

        const len = inputText.length;
        if (len >= 15 && len <= 80) score += 4;
        else if (len < 8) score -= 8;

        return Math.max(0, Math.min(100, score));
    },

    getRiskLevel: (r, e) => {
        const total = r + e;
        if (total >= 130) return { level: "low", text: "低" };
        if (total >= 80) return { level: "mid", text: "中" };
        return { level: "high", text: "高" };
    },

    getOptimizationTips: (r, e, level) => {
        const tips = [];
        if (r < 40) tips.push("理性不足，避免极端用语，尽量客观陈述观点");
        else if (r < 70) tips.push("理性尚可，可减少情绪化语气，强化逻辑");
        else tips.push("理性表达优秀，观点客观中立");

        if (e < 40) tips.push("共情较弱，多换位思考，减少指责语气");
        else if (e < 70) tips.push("共情一般，可增加体谅、安抚类表达");
        else tips.push("共情表现优秀，懂得换位思考");

        const levelTips = {
            easy: "舒缓难度：优先保证语气平和",
            mid: "进阶难度：尝试给出建设性看法",
            hard: "高压难度：保持中立，不被情绪带偏"
        };
        tips.push(levelTips[level]);
        return tips.join("。");
    },

    getEncouragement: (cnt, cat, r, e) => {
        const total = r + e;
        let stage = cnt <= 3 ? "入门阶段" : cnt <= 8 ? "提升阶段" : "熟练阶段";
        const catMap = { hot: "热点讨论", dispute: "争议调解", debate: "观点交锋", refresh: "趣味表达" };
        let desc = total >= 130 ? "优秀" : total >= 80 ? "良好" : "有待加强";
        let str = `第 ${cnt} 次训练完成，${stage}。你在${cat}场景表现${desc}`;
        if (total >= 130) str += "，可尝试「事实+感受+方案」三段式表达";
        else if (total >= 80) str += "，继续练习可进一步提升表达能力";
        else str += "，建议先模仿示例话术，慢慢调整语气";
        return str;
    }
};

const levelMap = { 0: "easy", 1: "mid", 2: "hard" };
let trainCount = localStorage.getItem("commentTrainCount") ? Number(localStorage.getItem("commentTrainCount")) : 0;
const HISTORY_KEY = "trainHistoryList";
// 标记是否首次提交
let isFirstSubmit = true;

// ========= 音乐弹窗、播放器相关变量 =========
const musicModal = document.getElementById('musicModal');
const closeBtn = document.getElementById('closeBtn');
const playBtn = document.getElementById('playBtn');
const likeBtn = document.getElementById('likeBtn');
const progressFill = document.querySelector('.progress-fill');
const currentTimeEl = document.querySelector('.current-time');
const totalTimeEl = document.querySelector('.total-time');
const albumCover = document.querySelector('.album-cover');
let isPlaying = false;
let progressInterval = null;

// 格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
// 重置进度条
function resetProgress() {
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '00:00';
    if (progressInterval) clearInterval(progressInterval);
}
// 开启进度条
function startProgress() {
    const totalSeconds = 200;
    totalTimeEl.textContent = formatTime(totalSeconds);
    let currentSeconds = 0;
    progressInterval = setInterval(() => {
        if (!isPlaying) return;
        currentSeconds += 0.1;
        const progress = (currentSeconds / totalSeconds) * 100;
        progressFill.style.width = `${progress}%`;
        currentTimeEl.textContent = formatTime(currentSeconds); // 【关键：更新当前时间】
        if (progress >= 100) {
            resetProgress();
            isPlaying = false;
            playBtn.textContent = '▶';
        }
    }, 100);
}
// 播放/暂停
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
// 收藏按钮点击事件
likeBtn.addEventListener('click', function() {
    if (this.textContent === '🤍') {
        this.textContent = '❤️';
    } else {
        this.textContent = '🤍';
    }
});
// 打开音乐弹窗
function openMusicModal() {
    resetProgress();
    musicModal.classList.add('active');
    albumCover.classList.add('playing');
    isPlaying = true;
    playBtn.textContent = '| |';
    startProgress();
}
// 关闭音乐弹窗 → 打开反馈弹窗
closeBtn.addEventListener('click', () => {
    musicModal.classList.remove('active');
    albumCover.classList.remove('playing');
    isPlaying = false;
    if (progressInterval) clearInterval(progressInterval);
    feedbackModal.classList.add('active');
});

// 格式化北京时间
function getNowTime() {
    const d = new Date();
    const year = d.getFullYear();
    const mon = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    return `${year}-${mon}-${day} ${h}:${m}:${s}`;
}
// 读取历史
function getHistory() {
    const str = localStorage.getItem(HISTORY_KEY);
    return str ? JSON.parse(str) : [];
}
// 保存历史
function saveHistory(list) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
}
// 渲染历史
function renderHistory() {
    const historyList = document.getElementById('historyList');
    const list = getHistory();
    if (list.length === 0) {
        historyList.innerHTML = '<div class="history-empty">暂无训练记录</div>';
        return;
    }
    let html = "";
    list.reverse().forEach(item => {
        html += `
        <div class="history-item">
            <div class="history-time">${item.time}</div>
            <div class="history-content">作答：${item.content}</div>
            <div class="history-score">理性：${item.score1}  共情：${item.score2}</div>
        </div>
        `;
    });
    historyList.innerHTML = html;
}

// 页面加载完成后执行
window.addEventListener("DOMContentLoaded", function () {
    // 初始化时间与历史
    document.getElementById('updateTime').innerText = `题库更新于 ${getNowTime()}`;
    renderHistory();

    // 全局DOM节点
    const tabItems = document.querySelectorAll('.tab-item');
    const categoryItems = document.querySelectorAll('.category-item');
    const tagGroups = document.querySelectorAll('.tag-group');
    const sceneTags = document.querySelectorAll('.scene-tag');
    const levelTabs = document.querySelectorAll('.level-tab');
    const topicTitleEl = document.querySelector('.topic-title');
    const commentListEl = document.querySelector('.comment-list');
    const quickBubblesEl = document.querySelector('.quick-bubbles');
    const replyInputEl = document.querySelector('.reply-input');
    const charCountEl = document.querySelector('.char-count');
    const feedbackModal = document.getElementById('feedbackModal');
    const feedbackCloseBtn = document.getElementById('feedbackModal');

    // ========= 修复：使用事件委托（核心改动，解决快捷填充失效） =========
    quickBubblesEl.addEventListener('click', function(e) {
        // 只点击快捷气泡才执行
        if (e.target.classList.contains('quick-bubble')) {
            replyInputEl.value = e.target.textContent;
            charCountEl.textContent = `${replyInputEl.value.length}/120`;
        }
    });

    // 底部导航高亮
    const currentFileName = location.pathname.split('/').pop().replace('.html','');
    tabItems.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.page === currentFileName);
    });

    // 更新话题（移除内部重复绑定点击事件）
    function updateTopic() {
        const activeCategory = document.querySelector('.category-item.active').dataset.type;
        const activeLevelIndex = Array.from(levelTabs).findIndex(t => t.classList.contains('active'));
        const levelKey = levelMap[activeLevelIndex];
        const data = topicData[activeCategory][levelKey];

        topicTitleEl.textContent = data.title;
        commentListEl.innerHTML = '';
        data.comments.forEach(comment => {
            const item = document.createElement('div');
            item.className = 'comment-item';
            item.innerHTML = `
                <div class="comment-avatar">${comment.name.charAt(0)}</div>
                <div class="comment-content">
                    <div class="comment-name">${comment.name}</div>
                    <div class="comment-text">${comment.text}</div>
                </div>`;
            commentListEl.appendChild(item);
        });

        // 仅渲染标签，不再重复绑定点击事件
        quickBubblesEl.innerHTML = '';
        data.quickReplies.forEach(text => {
            const bubble = document.createElement('div');
            bubble.className = 'quick-bubble';
            bubble.textContent = text;
            quickBubblesEl.appendChild(bubble);
        });

        replyInputEl.value = '';
        charCountEl.textContent = '0/120';
    }

    // 顶部分类切换
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            categoryItems.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            const type = this.dataset.type;
            tagGroups.forEach(group => group.classList.remove('tag-group-show'));
            document.querySelector(`.tag-group-${type}`)?.classList.add('tag-group-show');
            updateTopic();
        });
    });

    // 训练气泡点击
    sceneTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const parentGroup = this.closest('.tag-group');
            let currType = "";
            if(parentGroup.classList.contains('tag-group-hot')) currType = "hot";
            else if(parentGroup.classList.contains('tag-group-dispute')) currType = "dispute";
            else if(parentGroup.classList.contains('tag-group-debate')) currType = "debate";
            else if(parentGroup.classList.contains('tag-group-refresh')) currType = "refresh";

            categoryItems.forEach(c => c.classList.remove('active'));
            document.querySelector(`.category-item[data-type="${currType}"]`)?.classList.add('active');
            tagGroups.forEach(g => g.classList.remove('tag-group-show'));
            parentGroup.classList.add('tag-group-show');
            updateTopic();
        });
    });

    // 难度切换
    levelTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            levelTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            updateTopic();
        });
    });

    // 字数统计
    replyInputEl.addEventListener('input', () => {
        charCountEl.textContent = `${replyInputEl.value.length}/120`;
    });

    // 回车提交
    replyInputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const inputText = this.value.trim();
            if (!inputText) {
                alert("请输入回应内容");
                return;
            }
            const activeCategory = document.querySelector('.category-item.active').dataset.type;
            const activeLevelIndex = Array.from(levelTabs).findIndex(t => t.classList.contains('active'));
            const levelKey = levelMap[activeLevelIndex];

            const rScore = feedbackConfig.getRationalScore(inputText, levelKey);
            const eScore = feedbackConfig.getEmpathyScore(inputText, levelKey);

            trainCount++;
            localStorage.setItem("commentTrainCount", trainCount);

            const historyList = getHistory();
            historyList.push({
                time: getNowTime(),
                content: inputText,
                score1: rScore,
                score2: eScore
            });
            saveHistory(historyList);
            renderHistory();

            const risk = feedbackConfig.getRiskLevel(rScore, eScore);
            const tips = feedbackConfig.getOptimizationTips(rScore, eScore, levelKey);
            const encourage = feedbackConfig.getEncouragement(trainCount, activeCategory, rScore, eScore);

            document.querySelector('.score-row .score-item:nth-child(1) .score-value').textContent = rScore;
            document.querySelector('.score-row .score-item:nth-child(2) .score-value').textContent = eScore;
            const riskDom = document.querySelector('.score-row .score-item:nth-child(3) .score-value');
            riskDom.textContent = risk.text;
            riskDom.className = `score-value risk-${risk.level}`;
            document.querySelector('.feedback-block .feedback-text').textContent = tips;
            document.querySelector('.feedback-encourage .feedback-text').textContent = encourage;

            // 首次提交弹音乐，非首次直接弹反馈
            if (isFirstSubmit) {
                openMusicModal();
                isFirstSubmit = false;
            } else {
                feedbackModal.classList.add('active');
            }

            this.value = '';
            charCountEl.textContent = '0/120';
        }
    });

    // 关闭反馈弹窗
    feedbackCloseBtn.addEventListener('click', () => feedbackModal.classList.remove('active'));
    feedbackModal.addEventListener('click', (e) => {
        if (e.target === feedbackModal) feedbackModal.classList.remove('active');
    });

    // 播放器按钮事件
    playBtn.addEventListener('click', togglePlay);

    // 页面初始化
    updateTopic();
});

// ========= 全局登录拦截 极简版 =========
// 登录状态：true=已登录  false=游客
const IS_LOGIN = localStorage.getItem("isLogin") === "1";
const loginTip = document.getElementById("loginTip");
const tipClose = document.querySelector(".tip-close");
const wrap = document.querySelector(".phone-box");

// 关闭弹窗
tipClose.addEventListener("click", () => {
    loginTip.classList.remove("show");
});

// 全局点击拦截：游客状态下，所有点击弹出提示
wrap.addEventListener("click", (e) => {
    // 已登录 → 放行，原有逻辑正常执行
    if (IS_LOGIN) return;

    // 排除弹窗自身点击（防止反复弹出）
    if (loginTip.contains(e.target)) return;

    // 游客：弹出登录提示，阻止当前功能执行
    e.preventDefault();
    e.stopPropagation();
    loginTip.classList.add("show");
});