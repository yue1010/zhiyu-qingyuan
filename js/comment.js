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
                "进阶难度可以尝试提出建设性的看法。"
            ]
        },
        hard: {
            title: "今日话题：如何看待“网络暴力”对当事人的影响？",
            comments: [
                { name: "跟风路人", text: "谁让她自己行为不端，活该被骂！" },
                { name: "冷静旁观者", text: "就算有问题，也不该用网络暴力的方式去攻击。" }
            ],
            quickReplies: [
                "网络暴力是违法行为，不应该用伤害他人的方式表达观点。",
                "我们可以批评错误，但不能进行人身攻击和网暴。",
                "平台应该加强监管，遏制网络暴力的蔓延。",
                "高压难度请保持理性，避免被情绪带偏。"
            ]
        }
    },
    dispute: {
        easy: {
            title: "今日话题：职场中遇到“甩锅”同事，你会怎么处理？",
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
            title: "今日话题：朋友向你吐槽同事，你会怎么回应？",
            comments: [
                { name: "八卦小能手", text: "他也太过分了吧！我早就看他不顺眼了！" },
                { name: "理性好友", text: "吐槽归吐槽，背后说人坏话不太好哦。" }
            ],
            quickReplies: [
                "先倾听对方的情绪，让他把负面情绪发泄出来。",
                "适当安慰就好，不要跟着一起吐槽别人。",
                "可以引导他往解决问题的方向想，而不是单纯抱怨。",
                "进阶难度可以尝试提出建设性建议。"
            ]
        },
        hard: {
            title: "今日话题：发现朋友在背后说你坏话，你会怎么办？",
            comments: [
                { name: "心碎本人", text: "我把他当好朋友，他居然背后捅我刀子！" },
                { name: "人间清醒", text: "这种朋友不值得深交，保持距离就好。" }
            ],
            quickReplies: [
                "先确认事实，不要轻信别人的传言。",
                "如果是误会，可以找机会当面说清楚。",
                "如果是事实，那这个人不值得深交，慢慢疏远就好。",
                "高压难度请保持冷静，避免做出冲动的决定。"
            ]
        }
    },
    debate: {
        easy: {
            title: "今日话题：你支持“婚前财产公证”吗？",
            comments: [
                { name: "现实主义", text: "必须公证！不然离婚了财产都被分走了！" },
                { name: "理想主义", text: "谈钱伤感情，公证了就没有信任感了。" }
            ],
            quickReplies: [
                "公证是为了保护双方的权益，不是不信任。",
                "婚前财产公证可以避免后续很多纠纷。",
                "只要双方都能接受，公证与否都可以。",
                "舒缓难度建议客观看待这个问题。"
            ]
        },
        mid: {
            title: "今日话题：如何看待“躺平”和“内卷”的争议？",
            comments: [
                { name: "躺平选手", text: "卷不动了，躺平不香吗？干嘛非要内耗自己！" },
                { name: "内卷达人", text: "躺平就是摆烂，年轻就要努力奋斗！" }
            ],
            quickReplies: [
                "每个人的生活方式不同，没必要互相指责。",
                "躺平不是摆烂，是一种对自己生活的选择。",
                "内卷也不是原罪，关键是要卷得有意义。",
                "进阶难度可以尝试辩证地分析问题。"
            ]
        },
        hard: {
            title: "今日话题：如何看待“性别对立”的言论？",
            comments: [
                { name: "极端发言者", text: "现在的男/女的都不是好东西！" },
                { name: "理性发声者", text: "不能以偏概全，每个群体里都有好有坏。" }
            ],
            quickReplies: [
                "性别对立只会激化矛盾，对谁都没有好处。",
                "我们应该反对极端言论，尊重每个个体的差异。",
                "不能因为少数人的行为，就否定整个群体。",
                "高压难度请保持中立，避免被极端言论带偏。"
            ]
        }
    },
    refresh: {
        easy: {
            title: "今日话题：你觉得“拖延症”能治好吗？",
            comments: [
                { name: "重度拖延", text: "我这辈子是没救了，什么事都要拖到最后一天！" },
                { name: "自律达人", text: "拖延症就是懒，逼自己一把就好了。" }
            ],
            quickReplies: [
                "可以从小事做起，慢慢养成不拖延的习惯。",
                "拖延症可能和焦虑有关，先找到根源再解决。",
                "不用逼自己一下子改过来，慢慢来就好。",
                "舒缓难度建议多鼓励，少指责。"
            ]
        },
        mid: {
            title: "今日话题：如何看待“碎片化学习”的效果？",
            comments: [
                { name: "碎片化学习者", text: "刷短视频也能学到很多东西，碎片化学习真香！" },
                { name: "深度学习者", text: "碎片化学习都是伪学习，根本学不到东西！" }
            ],
            quickReplies: [
                "碎片化学习可以作为补充，但不能替代系统学习。",
                "关键是要把学到的知识串联起来，形成体系。",
                "不同的人适合不同的学习方式，没必要否定一种。",
                "进阶难度可以分析两种学习方式的优缺点。"
            ]
        },
        hard: {
            title: "今日话题：如何看待“网红带货”的争议？",
            comments: [
                { name: "消费者", text: "很多网红卖的东西都是假货，专门骗粉丝的钱！" },
                { name: "主播粉丝", text: "我家主播卖的东西都很好，你自己不会挑别赖别人！" }
            ],
            quickReplies: [
                "网红带货本身是一种销售模式，关键是要规范。",
                "消费者也要理性消费，不要盲目跟风购买。",
                "平台和监管部门应该加强监管，打击假货和虚假宣传。",
                "高压难度请客观分析问题，避免被粉丝情绪影响。"
            ]
        }
    }
};

// 动态反馈配置（可根据输入内容、难度、分类动态生成反馈）
const feedbackConfig = {
    // 理性表达评分规则：根据输入的关键词、长度、语气词数量计算
    getRationalScore: (inputText, level) => {
        // 基础分
        let score = 60;
        const levelWeights = { easy: 0, mid: -5, hard: -10 };
        score += levelWeights[level];

        // 加分项：包含理性关键词
        const rationalKeywords = ["客观", "理性", "理解", "尊重", "事实", "依据", "沟通", "求同存异"];
        rationalKeywords.forEach(keyword => {
            if (inputText.includes(keyword)) score += 5;
        });

        // 减分项：包含情绪化关键词
        const emotionalKeywords = ["垃圾", "傻逼", "活该", "都怪", "绝对", "肯定", "必须", "无脑"];
        emotionalKeywords.forEach(keyword => {
            if (inputText.includes(keyword)) score -= 10;
        });

        // 长度加分（适中长度）
        if (inputText.length >= 20 && inputText.length <= 80) score += 5;
        // 过长/过短减分
        if (inputText.length < 10) score -= 8;
        if (inputText.length > 100) score -= 5;

        // 语气词减分（啊、哦、呢、吧、嘛、咯、哈）
        const modalWords = ["啊", "哦", "呢", "吧", "嘛", "咯", "哈"];
        const modalCount = modalWords.reduce((count, word) => count + (inputText.includes(word) ? 1 : 0), 0);
        score -= modalCount * 2;

        // 限制分数范围
        return Math.max(0, Math.min(100, score));
    },

    // 共情程度评分规则
    getEmpathyScore: (inputText, level) => {
        let score = 50;
        const levelWeights = { easy: 5, mid: 0, hard: -5 };
        score += levelWeights[level];

        // 加分项：包含共情关键词
        const empathyKeywords = ["感受", "理解", "体谅", "不容易", "辛苦了", "换位思考", "在意"];
        empathyKeywords.forEach(keyword => {
            if (inputText.includes(keyword)) score += 6;
        });

        // 减分项：指责性词汇
        const blameKeywords = ["你错了", "怪你", "活该", "不懂", "不明白", "自私"];
        blameKeywords.forEach(keyword => {
            if (inputText.includes(keyword)) score -= 8;
        });

        return Math.max(0, Math.min(100, score));
    },

    // 风险等级判定
    getRiskLevel: (rationalScore, empathyScore) => {
        const total = rationalScore + empathyScore;
        if (total >= 100) return { level: "low", text: "低" };
        if (total >= 60) return { level: "mid", text: "中" };
        return { level: "high", text: "高" };
    },

    // 动态生成优化建议
    getOptimizationTips: (inputText, rationalScore, empathyScore, level) => {
        const tips = [];
        
        if (rationalScore < 50) {
            tips.push("论点还不够清晰，建议补充事实依据，减少情绪化语气词");
        } else if (rationalScore < 70) {
            tips.push("理性表达较好，可进一步优化逻辑，让观点更有说服力");
        } else {
            tips.push("理性表达优秀，能客观看待问题并给出有依据的观点");
        }

        if (empathyScore < 50) {
            tips.push("共情程度不足，可尝试使用更包容的语言，比如将“你”改为“我们”降低对立感");
        } else if (empathyScore < 70) {
            tips.push("共情表现良好，可适当加入换位思考的表达，增强情感共鸣");
        } else {
            tips.push("共情能力优秀，能很好地理解并回应他人的情绪");
        }

        // 难度适配建议
        const levelTips = {
            easy: "舒缓难度下，先做到语气平和，再逐步提升观点完整性",
            mid: "进阶难度可尝试提出建设性方案，而非单纯表达观点",
            hard: "高压难度下需保持中立，避免被极端言论带偏，坚持理性分析"
        };
        tips.push(levelTips[level]);

        return tips.join("。");
    },

    // 动态生成鼓励信息
    getEncouragement: (trainCount, category, rationalScore, empathyScore) => {
        const totalScore = rationalScore + empathyScore;
        let progressText = "";
        
        if (trainCount <= 3) {
            progressText = "入门阶段，正在建立理性表达的基础习惯";
        } else if (trainCount <= 8) {
            progressText = "提升阶段，表达能力正在稳步进步";
        } else {
            progressText = "熟练阶段，已具备稳定的理性表达能力";
        }

        const categoryTips = {
            hot: "热点讨论场景",
            dispute: "争议调解场景",
            debate: "观点交锋场景",
            refresh: "趣味表达场景"
        };

        let encouragement = `第 ${trainCount} 次训练完成，${progressText}。你在${categoryTips[category]}下的表现${totalScore >= 100 ? "优秀" : totalScore >= 70 ? "良好" : "仍需提升"}`;
        
        if (totalScore >= 120) {
            encouragement += "，下一步可尝试“事实 + 感受 + 方案”三段式表达，让观点更有深度";
        } else if (totalScore >= 80) {
            encouragement += "，建议多尝试不同场景的表达训练，拓宽表达思路";
        } else {
            encouragement += "，可先从模仿快捷表达建议开始，逐步提升表达质量";
        }

        return encouragement;
    }
};

// 难度映射
const levelMap = {
    0: "easy",
    1: "mid",
    2: "hard"
};

// 训练次数记录（可持久化到localStorage）
let trainCount = localStorage.getItem("commentTrainCount") ? Number(localStorage.getItem("commentTrainCount")) : 0;

// ========== 底部导航 跳转+高亮 ==========
const tabItems = document.querySelectorAll('.tab-item');
const currentFileName = window.location.pathname.split('/').pop().replace('.html','');
tabItems.forEach(tab => {
    const page = tab.dataset.page;
    if(page === currentFileName){
        tab.classList.add('active');
    }else{
        tab.classList.remove('active');
    }
});

// 2. 顶部分类栏 联动切换训练场景 + 题目
const categoryItems = document.querySelectorAll('.category-item');
const tagGroups = document.querySelectorAll('.tag-group');
const topicTitleEl = document.querySelector('.topic-title');
const commentListEl = document.querySelector('.comment-list');
const quickBubblesEl = document.querySelector('.quick-bubbles');
const replyInputEl = document.querySelector('.reply-input');
const charCountEl = document.querySelector('.char-count');
const feedbackModal = document.getElementById('feedbackModal');
const feedbackCloseBtn = document.getElementById('feedbackCloseBtn');

categoryItems.forEach(item => {
    item.addEventListener('click', function() {
        categoryItems.forEach(cat => cat.classList.remove('active'));
        this.classList.add('active');

        const type = this.dataset.type;
        tagGroups.forEach(group => group.classList.remove('tag-group-show'));
        const targetGroup = document.querySelector(`.tag-group-${type}`);
        if (targetGroup) {
            targetGroup.classList.add('tag-group-show');
        }
        document.querySelector('.scene-scroll').scrollLeft = 0;

        // 切换题目
        updateTopic();
    });
});

// 3. 难度切换（舒缓/进阶/高压）
const levelTabs = document.querySelectorAll('.level-tab');
levelTabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        levelTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        updateTopic();
    });
});

// 更新题目和评论的函数
function updateTopic() {
    const activeCategory = document.querySelector('.category-item.active').dataset.type;
    const activeLevelIndex = Array.from(levelTabs).findIndex(t => t.classList.contains('active'));
    const levelKey = levelMap[activeLevelIndex];
    const data = topicData[activeCategory][levelKey];

    // 更新标题
    topicTitleEl.textContent = data.title;

    // 更新评论列表
    commentListEl.innerHTML = '';
    data.comments.forEach(comment => {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <div class="comment-avatar">${comment.name.charAt(0)}</div>
            <div class="comment-content">
                <div class="comment-name">${comment.name}</div>
                <div class="comment-text">${comment.text}</div>
            </div>
        `;
        commentListEl.appendChild(commentItem);
    });

    // 更新快捷回复
    quickBubblesEl.innerHTML = '';
    data.quickReplies.forEach(text => {
        const bubble = document.createElement('div');
        bubble.className = 'quick-bubble';
        bubble.textContent = text;
        bubble.addEventListener('click', () => {
            replyInputEl.value = text;
            charCountEl.textContent = `${text.length}/120`;
        });
        quickBubblesEl.appendChild(bubble);
    });

    // 清空输入框
    replyInputEl.value = '';
    charCountEl.textContent = '0/120';
}

// 4. 输入框字数统计
replyInputEl.addEventListener('input', function() {
    const len = this.value.length;
    charCountEl.textContent = `${len}/120`;
});

// 5. 回车提交输入内容（阻止默认换行，触发反馈）
replyInputEl.addEventListener('keydown', function(e) {
    // 判断是否是回车键且没有按住shift（shift+回车可换行）
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // 阻止默认换行行为
        
        const inputText = this.value.trim();
        if (!inputText) {
            alert('请输入你的回应内容后再提交');
            return;
        }

        // 生成动态反馈
        generateFeedback(inputText);
        
        // 训练次数+1并保存
        trainCount++;
        localStorage.setItem("commentTrainCount", trainCount);
        
        // 清空输入框
        this.value = '';
        charCountEl.textContent = '0/120';
    }
});

// 6. 生成动态反馈并显示弹窗
function generateFeedback(inputText) {
    // 获取当前选中的分类和难度
    const activeCategory = document.querySelector('.category-item.active').dataset.type;
    const activeLevelIndex = Array.from(levelTabs).findIndex(t => t.classList.contains('active'));
    const levelKey = levelMap[activeLevelIndex];

    // 计算各项评分
    const rationalScore = feedbackConfig.getRationalScore(inputText, levelKey);
    const empathyScore = feedbackConfig.getEmpathyScore(inputText, levelKey);
    const riskLevel = feedbackConfig.getRiskLevel(rationalScore, empathyScore);
    const optimizationTips = feedbackConfig.getOptimizationTips(inputText, rationalScore, empathyScore, levelKey);
    const encouragement = feedbackConfig.getEncouragement(trainCount, activeCategory, rationalScore, empathyScore);

    // 更新弹窗内容
    document.querySelector('.score-row .score-item:nth-child(1) .score-value').textContent = rationalScore;
    document.querySelector('.score-row .score-item:nth-child(2) .score-value').textContent = empathyScore;
    
    // 更新风险等级（样式+文本）
    const riskScoreEl = document.querySelector('.score-row .score-item:nth-child(3) .score-value');
    riskScoreEl.textContent = riskLevel.text;
    riskScoreEl.className = `score-value risk-${riskLevel.level}`;

    // 更新优化建议和鼓励信息
    document.querySelector('.feedback-block .feedback-text').textContent = optimizationTips;
    document.querySelector('.feedback-encourage .feedback-text').textContent = encouragement;

    // 显示弹窗
    feedbackModal.classList.add('active');
}

// 7. 关闭反馈弹窗
feedbackCloseBtn.addEventListener('click', function() {
    feedbackModal.classList.remove('active');
});

// 初始化题目
updateTopic();

// 初始化弹窗关闭事件（点击背景关闭）
feedbackModal.addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});