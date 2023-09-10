const volBox = document.querySelector('.vol-box');
const vol = document.querySelector('.vol');
const volImg = document.querySelector('.vol-img');

const musicClose = document.querySelector('.music-close');
const musicShell = document.querySelector('.musicShell');

const Play = document.querySelector('.play');
const musicElement = document.querySelector('.music-element');
const record = document.querySelector('.record');

const seekBar = document.querySelector('.seekBar');
const duration = document.querySelector('.duration');


const currentTime = document.querySelector('.current-time');

const playImg = document.querySelector('.play-img');


// 播放按钮点击监听
Play.addEventListener('click', function () {
    if (musicElement.paused) {
        musicElement.play();
        playImg.src = './music-img/stop.png';
        record.style.left = '30px';
        musicElement.State = '0';   // 播放
    } else if (musicElement.played) {
        musicElement.pause();
        playImg.src = './music-img/play.png';
        record.style.left = '0px';
        musicElement.State = '1';   // 暂停
    }
})


// 音乐加载时返回总时长
musicElement.addEventListener('loadeddata', loadeddata)

function loadeddata() {
    seekBar.max = musicElement.duration;
    var ds = parseInt(musicElement.duration % 60);
    var dm = parseInt((musicElement.duration / 60) % 60);
    duration.innerHTML = dm + ':' + ds;
}

// 音乐进度更新时设置
musicElement.addEventListener('timeupdate', function () {
    seekBar.value = musicElement.currentTime;
})

// 音乐进度设置
seekBar.addEventListener('input', function () {
    musicElement.currentTime = seekBar.value
})

// 音乐进度更新时设置
musicElement.addEventListener('timeupdate', function () {
    var cs = parseInt(musicElement.currentTime % 60);
    var cm = parseInt((musicElement.currentTime / 60) % 60);
    currentTime.innerHTML = cm + ':' + cs;
})


const love = document.querySelector('.love');
const loveImg = document.querySelector('.love-img');

// 音乐收藏状态
var loveState = 0;  // 未收藏
love.addEventListener('click', function () {
    if (loveState == 0) {
        loveImg.src = './music-img/no-love1.svg';
        loveState = 1;
    } else {
        loveImg.src = './music-img/love1.svg';
        loveState = 0;
    }
})

const volRange = document.querySelector('.vol-range');
const volUp = document.querySelector('.vol-up');
const volDown = document.querySelector('.vol-down');

// 音量+
volUp.addEventListener('click', function () {
    volRange.value = Number(volRange.value) + 20;
    musicElement.volume = volRange.value / 100;
    volChange()
})

// 音量-
volDown.addEventListener('click', function () {
    volRange.value = Number(volRange.value) - 20;
    musicElement.volume = volRange.value / 100;
    volChange()
})

// 监听滑动条
volRange.addEventListener('input', function () {
    musicElement.volume = this.value / 100;
    volChange()
})

// 音量放大
function handleValUp() {
    volRange.value = Number(volRange.value) + 20;
    musicElement.volume = volRange.value / 100;
    console.log(111);
}

// 音量减小
function handleValDown() {
    volRange.value = Number(volRange.value) - 20;
    musicElement.volume = volRange.value / 100;
}

// 音乐音量状态
var volState = 0;   // 0 未点击 1 点击

// 音量条颜色变换
vol.addEventListener('click', function () {
    if (volState == 0) {
        volBox.style.display = 'block';
        if (volRange.value == 0) {
            volImg.src = './music-img/mute1-click1.png';
        } else if (volRange.value < 40 && volRange.value > 0) {
            volImg.src = './music-img/vol0-click.png';
        } else if (volRange.value > 80) {
            volImg.src = './music-img/vol2-click1.png';
        } else if (volRange.value <= 80 && volRange.value >= 40) {
            volImg.src = './music-img/vol1-click1.png';
        }
        volState = 1;
    } else {
        volBox.style.display = 'none';
        if (volRange.value == 0) {
            volImg.src = './music-img/mute1.png';
        } else if (volRange.value < 40 && volRange.value > 0) {
            volImg.src = './music-img/vol0.png';
        } else if (volRange.value > 80) {
            volImg.src = './music-img/vol2.png';
        } else if (volRange.value <= 80 && volRange.value >= 40) {
            volImg.src = './music-img/vol1.png';
        }
        volState = 0;
    }
})

function volChange() {
    if (volRange.value == 0) {
        volImg.src = './music-img/mute1-click1.png';
    } else if (volRange.value < 40 && volRange.value > 0) {
        root.style.setProperty('--music-input-bg', '-100vw 0 0 100vw #ffbe76');
        volImg.src = './music-img/vol0-click.png';
    } else if (volRange.value > 80) {
        root.style.setProperty('--music-input-bg', '-100vw 0 0 100vw #ff6b81');
        volImg.src = './music-img/vol2-click1.png';
    } else if (volRange.value <= 80 && volRange.value >= 40) {
        root.style.setProperty('--music-input-bg', '-100vw 0 0 100vw #7bed9f');
        volImg.src = './music-img/vol1-click1.png';
    }
    setTimeout(() => {
        root.style.setProperty('--music-input-bg', '-100vw 0 0 100vw rgb(162, 155, 254)');
    }, 1000);
}

// 设置音乐列表
var music = {
    1: {
        songName: '我知道',
        singer: 'BY-2',
        songSrc: './music/BY2 - 我知道.mp3',
        songImg: ''
    },
    2: {
        songName: '危险派对',
        singer: '王以太',
        songSrc: './music/王以太、刘至佳 - 危险派对.mp3',
        songImg: './music-img/危险派对.jpg'
    },
    3: {
        songName: '意外',
        singer: '薛之谦',
        songSrc: './music/薛之谦 - 意外.mp3',
        songImg: './music-img/意外.jpg'
    },
    4: {
        songName: '在你的身边',
        singer: '盛哲',
        songSrc: './music/盛哲 - 在你的身边.mp3',
        songImg: './music-img/在你的身边.jpg'
    },
    5: {
        songName: '时光背面的我',
        singer: '刘至佳',
        songSrc: './music/刘至佳、韩瞳 - 时光背面的我.mp3',
        songImg: './music-img/时光背面的我.jpg'
    },
    6: {
        songName: '夏天',
        singer: '李玖哲',
        songSrc: './music/李玖哲 - 夏天.mp3',
        songImg: './music-img/夏天.jpg'
    }
}

const songName = document.querySelector('.song-name');
const singer = document.querySelector('.singer');
const songCover = document.querySelector('.song-cover');


var musicCurrent = 1;   // 当前音乐

// 音乐名称路径修改函数
function musicChange(i) {
    if (i > music.length) {
        return
    } else {
        musicElement.src = music[i].songSrc;
        songName.innerHTML = music[i].songName;
        singer.innerHTML = music[i].singer;
        music[i].songImg.length == 0 ? songCover.src = './music-img/noImg.png' : songCover.src = music[i].songImg;
    }
}

const next = document.querySelector('.next');   // 下一首
const last = document.querySelector('.last');   // 上一首

const musicArr = Object.keys(music);    // 对象转换数组

next.addEventListener('click', function () {
    if (musicCurrent == musicArr.length) {
        musicCurrent = 1;
    } else {
        musicCurrent += 1;
    }
    musicChange(musicCurrent);  // 修改音乐展示信息
    musicElement.State = 0;     // 设置音乐状态为播放
    // 等src更新后再获取时长,否则时长NaN
    setTimeout(() => {
        loadeddata();
        musicElement.play();
        playImg.src = './music-img/stop.png';
        record.style.left = '30px';
    }, 100)
})


last.addEventListener('click', function () {
    if (musicCurrent == 1) {
        // 第一首上一首的情况
        musicCurrent = musicArr.length;
    } else {
        musicCurrent -= 1
    }
    musicChange(musicCurrent);
    musicElement.State = 0;     // 设置音乐状态为播放
    setTimeout(() => {
        loadeddata();
        musicElement.play();
        playImg.src = './music-img/stop.png';
        record.style.left = '30px';
    }, 100)
})

// 执行音乐参数修改函数
musicChange(musicCurrent);


const repeat = document.querySelector('.repeat');
const repeatImg = document.querySelector('.repeat-img');
var repeatState = 0;

repeat.addEventListener('click', function () {
    if (repeatState == 0) {
        repeatImg.src = './music-img/random.png';
        repeatState = 1;
    } else {
        repeatImg.src = './music-img/circulstion.png';
        repeatState = 0;
    }
})

// 当音乐结束
musicElement.addEventListener('ended', function () {
    if (repeatState == 0) {
        // 循环播放
        if (musicCurrent == musicArr.length) {
            musicCurrent = 1;
        } else {
            musicCurrent += 1;
        }
        musicChange(musicCurrent);
        playImg.src = './music-img/play.png';
        record.style.left = '0px';
        musicElement.currentTime = 0;
        // 等src更新后再获取时长,否则时长NaN
        setTimeout(() => {
            loadeddata();
            musicElement.play();
            playImg.src = './music-img/stop.png';
            record.style.left = '30px';
        }, 1000)
    }
})

// 小窗设置部分

const musicLittle = document.querySelector('.music-little');
var musicTime = 0;  // 按压时间

musicLittle.addEventListener('mousedown', function (e) {
    let musicTimes = setInterval(() => {
        musicTime += 1;
        console.log(musicTime);
    }, 500)    // 定时器计算按压时间
    // 鼠标在盒子内的图标
    var x = e.pageX - musicLittle.offsetLeft;
    var y = e.pageY - musicLittle.offsetTop;

    // 鼠标移动修改小窗的坐标
    function musicLittleMove(e) {
        musicLittle.style.left = e.pageX - x + 'px';
        musicLittle.style.top = e.pageY - y + 'px';
        musicLittle.style.borderRadius = '15px';
    }

    document.addEventListener('mousemove', musicLittleMove)

    // 鼠标弹起取消跟随
    document.addEventListener('mouseup', musicLittleUp)

    // 取消跟随函数
    function musicLittleUp(e) {
        // console.log(e.srcElement.className);
        var width = document.body.clientWidth
        document.removeEventListener('mousemove', musicLittleMove);
        musicLittle.style.left = width - 50 + 'px';
        musicLittle.style.borderRadius = '15px 0 0 15px';
        clearInterval(musicTimes);  // 清除定时器
        if (musicTime == 0) {   // 按压时间 为0 视为点击
            musicShell.style.display = 'block';
            setTimeout(() => {
                musicShell.style.opacity = 1;
            }, 500)
            musicLittle.style.display = 'none';
        }
        setTimeout(() => {    // 500 毫秒后还原按压时间
            musicTime = 0;  // 还原为0
            document.removeEventListener('mouseup', musicLittleUp);     // 取消监听
        }, 500)
    }
})

// 关闭音乐界面
musicClose.addEventListener('click', function () {
    musicShell.style.opacity = 0;   // 实现淡出效果
    setTimeout(() => {
        musicShell.style.display = 'none';
    }, 1000)

    if (musicElement.State == 0) {  // 判断音乐是播放还是暂停
        musicLittle.style.display = 'block';
    }
})
