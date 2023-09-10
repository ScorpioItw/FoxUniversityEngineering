var search = document.querySelector('.search_bar');
var input = document.querySelector("input");
var Body = document.querySelector(".body");
var click = 0; // 0未点击 1点击

var root = document.querySelector(':root');
var maxWidth = getComputedStyle(root).getPropertyValue("--max-width");
// console.log(maxWidth);

var fixedHeight = document.body.clientHeight;
// console.log(fixedHeight);

var base = document.querySelector('#base');
// 限制高度解决手机软键盘问题
base.style.height = fixedHeight + 'px';

// window.onresize = function () {
//     //测试用
//     var vw = window.innerWidth;
//     console.log('目前宽度' + vw);
//     console.log('最大宽度' + maxWidth);
//     base.style.height = vw;
// }

// window.onload = function () {
//     tip(3, '欢迎使用狐尼克起始页');
//     loadeddata()
// }

window.addEventListener('load', () => {
    tip(3, '欢迎使用狐尼克起始页');
    loadeddata()
})

document.addEventListener('contextmenu', function (e) {
    // 禁选右键菜单
    e.preventDefault();
})

var bg = document.querySelector('.bg');
var searchLogo = document.querySelector('.search_logo');
// console.log(bg);

input.onclick = function () { //搜索被点击时
    input.style.caretColor = 'black';   // 改变光标颜色
    input.setAttribute('placeholder', '');  // 清空提示词
    search.style.width = maxWidth;   // 搜索框被点击放大效果
    search.style.backgroundColor = 'rgba(255, 255, 255, .9)';
    bg.style = 'transform:scale(1.1);filter:blur(10px)';    // 背景放大模糊
    text.style.pointerEvents = 'none';  // 美文不可点击
    searchLogo.style.display = 'block'; // 显示搜索logo
    click = 1;
}
input.onblur = function () {  //搜索失去焦点时
    input.style.caretColor = 'transparent';   // 还原光标颜色
    input.setAttribute('placeholder', 'Search');    // 还原提示词
    search.style.width = '230px';
    input.value = '';   // 失去焦点清空搜索内容
    search.style.backgroundColor = 'rgba(255, 255, 255, .25)';
    bg.style = 'transform:scale(1);filter:blur(0px)';
    text.style.pointerEvents = 'all';
    searchLogo.style.display = 'none';
    click = 0;

}
search.onmouseover = function () {  //鼠标经过搜索框时
    if (click == 0) {   // 写一个判断条件解决搜素展开时任然变换颜色
        search.style.width = maxWidth;   // 鼠标经过放大效果
        search.style.backgroundColor = 'rgba(255, 255, 255, .6)';
    }
}
search.onmouseout = function () {  //鼠标离开搜索框时
    if (click == 0) {
        search.style.width = '230px';   // 搜索未点击
        search.style.backgroundColor = 'rgba(255, 255, 255, .25)';
    } else {
        search.style.width = maxWidth;   // 搜索被点击
        search.style.backgroundColor = 'rgba(255, 255, 255, .9)';
    }
}

function getKey() {
    // input 回车跳转
    if (event.keyCode == 13) {
        let url = 'https://wuzhuiso.com/s?q=' + input.value;
        window.open(url, '_blank').location;
        input.value = '';
    }
}

var timeText = document.querySelector('.timeText');
var TimeText = document.querySelector('.TimeText');


setInterval("showTime()", 1000);

showTime = function () {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    timeText.innerText = h + ":" + m;
    TimeText.innerText = h + ":" + m;
    // console.log(timeText.innerText);
}

function tip(num, text) {
    let tipsBox = document.querySelector('.tipsBox');
    let tips = document.querySelector('.tips');
    let body = document.body;
    let tipsLogo = document.querySelector('.tipsLogo');
    let svg = tipsLogo.getElementsByTagName('svg')
    let tipsText = document.querySelector('.tipsText');

    // 提示框logo部分
    for (let i = 0; i < svg.length; i++) {
        svg[i].style.display = 'none';
        if (num == i) {
            svg[i].style.display = 'block';
        }
    }
    // 提示框内容部分
    if (Boolean(text) == true) {    // boolean内容为空返回false
        if (text.length >= 8) {
            tipsText.style.marginLeft = '20px';
        } else {
            tipsText.style.marginLeft = '0px';
        }
        tipsText.innerHTML = text
    } else {
        if (num == 0) {
            tipsText.innerHTML = '正确';
        } else if (num == 1) {
            tipsText.innerHTML = '错误';
        } else if (num == 2) {
            tipsText.innerHTML = '警告';
        } else if (num == 3) {
            tipsText.innerHTML = '提示';
        } else {
            tipsText.innerHTML = 'undefined';
        }
    }
    // 提示框显示部分
    tipsBox.style.display = 'block';
    body.appendChild(tips);
}


// 美文部分
var str;
var getStr = str;
// console.log(getStr);

var text = document.querySelector('.text');
var textName = document.querySelector('.text-name');
var textP = document.querySelector('.text-p');
var img = document.querySelector('.img');

setTimeout(function () {
    if (Boolean(str) == false) {
        // tipValue.innerHTML = '网络连接失败或api异常';
        tip(1, '网络连接失败')
        img.src = './img/cat.png';//静态网页测试用
        Body.style.backgroundImage = ('radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%)')
    } else {
        img.src = 'https://bing.shangzhenyang.com/api/1080p';
        // img.src = './img/cat.png';//静态网页测试用
        Body.style.backgroundImage = ('radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%)');
        if (getStr[0].length <= 20 && getStr[1].length <= 20) {
            textP.innerText = '「 ' + getStr[0] + ' 」';
            textName.innerText = '——' + getStr[1];
        }
    }
}, 500);


var textOptions = document.querySelector('.text-options');  // 获取美文选项按钮


text.onmousemove = function () {
    textName.style.display = 'block';
    text.style.backgroundColor = 'rgb(255 255 255 / 40%)';
    text.style.backdropFilter = 'blur(5px)';     // 新版本存在黑边
    text.style.transform = 'rotateX(-1deg) translateX(-50%)';
    textOptions.style.display = 'block';
}

text.onmouseout = function () {     // 美文鼠标离开事件
    textName.style.display = 'none';
    text.style.backgroundColor = 'transparent';
    text.style.backdropFilter = 'blur(0px)';
    textOptions.style.display = 'none';
}

var textOptionsBox = document.querySelector('.text-options-box');


textOptions.addEventListener('click', function (e) {    // 美文功能按钮点击事件
    textOptionsBox.style.display = 'block';
    e.stopPropagation();    // 阻止事件冒泡

});

var textOptionsBoxLi = document.querySelector('.text-options-box').getElementsByTagName('li')[0];
textOptionsBoxLi.style.pointerEvents = 'none';


setTimeout(function () {        // 2秒后解除对复制的禁用
    textOptionsBoxLi.style.pointerEvents = 'all';
}, 2000)


textOptionsBox.addEventListener('click', function (e) {     // 美文功能盒子点击事件
    if (e.target.nodeName == 'LI') {
        if (e.target.className == 'copy') {
            var copyText = textP.innerText + textName.innerText;
            navigator.clipboard.writeText(copyText);
            tip(0, '复制成功');
            textOptionsBox.style.display = 'none';
        } else if (e.target.className == 'sou') {
            console.warn('搜素功能未开放');
        }
    }
})

textOptionsBox.addEventListener('mouseover', function (e) {     // 美文功能盒子鼠标移动事件
    if (e.target.nodeName == 'LI') {
        textOptionsBox.style.display = 'block';
    } else {
        textOptionsBox.style.display = 'block';
    }
});

textOptionsBox.addEventListener('mouseout', function () {
    textOptionsBox.style.display = 'none';
})

document.addEventListener('click', function () {    // 文档点击事件
    textOptionsBox.style.display = 'none';
})

var textStyle = document.querySelector('.text-style');
textStyle.addEventListener('click', function (e) {  // 美文水波纹动画

    // console.log(e.target.offsetLeft);
    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;
    // console.log(x);

    let ripples = this.getElementsByTagName('span')[0];
    ripples.style.display = 'block';
    // console.log(ripples);
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    this.appendChild(ripples);
})