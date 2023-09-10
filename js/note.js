class arrRandom {
    // 执行次数
    #num = 0;
    // 新数组
    #newArr;
    // 抽取的元素
    #selectElement;
    // 删除的元素
    #delElement = null
    #random = (arr) => {
        let max = arr.length - 1;
        let min = 0;
        let index = Math.floor(Math.random() * (max - min + 1)) + min;
        return index;   // 返回一个随机数
    }
    #returnElement = (arr) => {
        // console.log(this.#num);
        if (this.#num == 0) {
            let index = this.#random(arr);
            // console.log(`随机索引为${index}`);
            // console.log(`抽取的元素为${arr[index]}`);
            this.#selectElement = arr[index];   // 抽取的元素
            this.#newArr = arr.filter((value) => {
                return value != arr[index];
            })
            // console.log(`新数组为:[${this.#newArr}]`);
            this.#num++;
        } else {
            if (this.#num == this.arr.length - 1) {
                // 数组有一个元素的情况时
                this.#selectElement = this.#newArr[0];  // 抽取元素
                this.#delElement = this.#newArr[0];
                this.#num++;
            } else if (this.#num == this.arr.length) {
                // 数组为空数组时
                this.#num = 0;
                this.#newArr = this.arr.filter((value) => {
                    return value != this.#delElement;
                })
                this.#returnElement(this.#newArr);
            } else {
                if (this.#delElement != null) {
                    // 最后提取的元素再添加到数组里面
                    this.#newArr.push(this.#delElement);
                    this.#delElement = null;
                }
                let index = this.#random(this.#newArr);
                this.#selectElement = this.#newArr[index];  // 抽取的元素
                this.#newArr = this.#newArr.filter((value) => {
                    return value != this.#newArr[index];
                })
                this.#num++;
            }
        }
    }
    main = (arr) => {
        // 程序入口
        this.arr = arr;
        this.#returnElement(this.arr);
        return this.#selectElement;     // 返回一个随机数
    }
}

var colors = new arrRandom();

var root = document.querySelector(':root')
root.style.setProperty("--window-width", `${window.outerWidth}px`);
root.style.setProperty("--window-height", `${window.outerHeight - 90}px`);
console.log(window.outerHeight);
console.log(window.innerHeight);

// 加载监听启动动画部分
window.onload = function () {
    NoFile();
}

var noteShell = document.querySelector('.noteShell');

var Lis = document.querySelector('.project-function').getElementsByTagName('li');

for (var i = 0; i < Lis.length; i++) {
    // 监听事件
    Lis[i].addEventListener('click', function () {
        for (var j = 0; j < Lis.length; j++) {
            Lis[j].className = '';
        }
        this.className = "current";
        // NoFile();
    })
}

// 禁止右键菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})

// var colors = ['#1e90ff', '#ff6b81', '#2ed573', '#ff7f50', '#eccc68', '#9980FA', '#FDA7DF', '#1289A7']
// color[Math.floor(Math.random()*10)]
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

// 笔记数量
var noteNum = 0;
function NoFile() {
    // 添加节点
    if (noteNum == 0) {
        let fileShowBoxNo = document.createElement('div');
        fileShowBoxNo.className = 'file_show_box_no';
        let fileShowBox = document.querySelector('.file_show_box');
        fileShowBox.appendChild(fileShowBoxNo);
        let NewFile = document.createElement('div');
        NewFile.innerHTML = "新建笔记";
        NewFile.className = 'new_file button';
        fileShowBoxNo.appendChild(NewFile);
        let fileContent = document.querySelector('.file_content');
        let fileContentNo = document.createElement('div');
        fileContentNo.className = 'file_content_no';
        fileContent.appendChild(fileContentNo);
        let noContent = document.createElement('div');
        noContent.className = 'no_content';
        fileContentNo.appendChild(noContent);
    }
}

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();


// 事件委托
var fileShowBox = document.querySelector('.file_show_box');
fileShowBox.addEventListener('click', function (e) {
    if (e.target.className == 'new_file button') {
        let fileShowBoxNo = document.querySelector('.file_show_box_no');
        // 删除节点(新建笔记)
        fileShowBox.removeChild(fileShowBoxNo);
        // 添加节点
        noteNum++;
        let note = document.createElement('div');
        note.className = 'note';
        note.draggable = 'true';
        // note.style.background = colors[randomNum(0, colorLength)];
        let color = colors.main(['#1e90ff', '#ff6b81', '#2ed573', '#ff7f50', '#eccc68', '#9980FA', '#FDA7DF', '#1289A7']);
        note.style.background = color;
        fileShowBox.appendChild(note);
        let noteName = document.createElement('p');
        let noteTime = document.createElement('p');
        noteName.className = 'note_name';
        noteName.innerHTML = '无标题笔记';
        noteTime.className = 'note_time';
        noteTime.innerHTML = `${year}/${month}/${day}`;
        note.appendChild(noteName);
        note.appendChild(noteTime);
    }
});


// 右键面板
var noteMenu = document.querySelector('.note_menu');

noteMenu.addEventListener('click', function (e) {
    if (e.target.localName == 'li') {
        if (e.target.innerHTML == '新建') {
            if (noteNum == 0) {
                let fileShowBoxNo = document.querySelector('.file_show_box_no');
                // 删除节点
                fileShowBox.removeChild(fileShowBoxNo);
            }
            // 添加节点
            noteNum++;
            let note = document.createElement('div');
            note.className = 'note';
            // 设置允许拖拽
            note.draggable = 'true';
            // note.style.background = colors[randomNum(0, colorLength)];
            let color = colors.main(['#1e90ff', '#ff6b81', '#2ed573', '#ff7f50', '#eccc68', '#9980FA', '#FDA7DF', '#1289A7']);
            note.style.background = color;
            fileShowBox.appendChild(note);
            let noteName = document.createElement('p');
            let noteTime = document.createElement('p');
            noteName.className = 'note_name';
            noteName.innerHTML = '无标题笔记';
            noteTime.className = 'note_time';
            noteTime.innerHTML = `${year}/${month}/${day}`;
            note.appendChild(noteName);
            note.appendChild(noteTime);
            console.log(noteNum);
        } else if (e.target.innerHTML == '删除') {
            // 删除笔记
            let media = document.querySelector('.media');
            media.play();
            fileShowBox.removeChild(noteClick);
            noteNum = noteNum - 1;
            if (noteNum == 0) {
                NoFile();
            }
        } else if (e.target.innerHTML == '加密') {
            let encrypt = document.createElement('div');
            encrypt.className = 'encrypt';
            console.log(noteClick);
            noteClick.appendChild(encrypt);
            // 设置为加密状态
            noteClick.start = 'encrypt';
        } else if (e.target.innerHTML == '解密') {
            let encrypt = document.querySelector('.encrypt');
            noteClick.removeChild(encrypt);
            // 解除加密
            noteClick.start = '';
        }
        noteMenu.style.display = 'none';
        fileShowBoxClickNum = 0;
    }
});

// 当前笔记
var noteClick;
// 右键监听
var fileShowBoxClickNum = 0;    // 点击
fileShowBox.addEventListener('mouseup', function (e) {
    e.stopPropagation();
    if (noteNum != 0) {
        if (e.button == 2) {
            if (fileShowBoxClickNum == 1) {
                noteMenu.style.display = 'none';
                fileShowBoxClickNum = 0;
            } else {
                if (e.target.className == 'note') {
                    noteClick = e.target;
                    let menuLis = document.querySelector('.note_menu_name').getElementsByTagName('li');
                    if (noteClick.start == 'encrypt') {
                        menuLis[2].innerHTML = '解密';
                        menuLis[2].classList = 'unlock';
                    } else {
                        menuLis[2].innerHTML = '加密';
                        menuLis[2].classList = 'lock';
                    }
                    console.dir(`笔记ID是${e.target.numId}`);

                    let x = e.pageX - fileShowBox.offsetLeft;
                    let y = e.pageY - fileShowBox.offsetTop;
                    console.log(x, y);
                    if (y >= 490) {
                        noteMenu.style.transform = 'translate(-470px, -250px)';
                    } else {
                        noteMenu.style.transform = 'translate(-470px, -120px)';
                        // noteMenu.style.transform = '';
                    }
                    noteMenu.style.left = `${x}px`;
                    noteMenu.style.top = `${y}px`;
                    noteMenu.style.display = 'block';
                    fileShowBoxClickNum = 1;
                }
            }
        }
    }
})

var curr;   // 当前元素
// 拖拽监听
fileShowBox.addEventListener('dragstart', function (e) {
    if (e.target.className == 'note') {
        // 设置项目移动到新位置
        e.dataTransfer.effectAllowed = 'move';
        // 存储当前笔记
        curr = e.target;
        // 异步添加moving样式
        setTimeout(function () {
            curr.classList.add('moving');
        })
    }
})

fileShowBox.addEventListener('dragenter', function (e) {
    // 禁止默认行为
    e.preventDefault();
    if (e.target === curr || e.target === fileShowBox || e.target.className != 'note') {
        return;
    }
    let noteArray = Array.from(fileShowBox.childNodes);     // 笔记容器所有元素数组
    // console.log(noteArray);
    let currIndex = noteArray.indexOf(curr);        // 拖拽元素下标
    // console.log(currIndex);
    let targetIndex = noteArray.indexOf(e.target);  // 目标元素下标
    console.log(targetIndex);
    if (currIndex < targetIndex) {
        fileShowBox.insertBefore(curr, e.target.nextElementSibling);
    } else {
        fileShowBox.insertBefore(curr, e.target);
    }
})

fileShowBox.addEventListener('dragover', function (e) {
    e.preventDefault();
})

fileShowBox.addEventListener('dragend', function (e) {
    curr.classList.remove('moving');    // 移除样式
})


// 新建按钮点击次数
var newProjectNum = 0;
var newProject = document.querySelector('.new_project');
newProject.addEventListener('click', function () {
    let projectBox = document.querySelector('.project_box');
    if (newProjectNum == 0) {
        projectBox.style.display = 'block';
        newProjectNum = 1;
    } else {
        projectBox.style.display = 'none';
        newProjectNum = 0;
    }
});


// 新建项目
var projectName = document.querySelector('.project_name');
projectName.addEventListener('click', function (e) {
    let projectBox = document.querySelector('.project_box');
    // console.dir(e.target);
    if (e.target.localName == 'li') {
        if (e.target.innerHTML == '新建笔记') {
            // console.log(111);
            if (noteNum == 0) {
                let fileShowBoxNo = document.querySelector('.file_show_box_no');
                // 删除节点
                fileShowBox.removeChild(fileShowBoxNo);
            }
            // 添加节点
            noteNum++;
            let note = document.createElement('div');
            note.className = 'note';
            note.draggable = 'true';
            // note.style.background = colors[randomNum(0, colorLength)];
            let color = colors.main(['#1e90ff', '#ff6b81', '#2ed573', '#ff7f50', '#eccc68', '#9980FA', '#FDA7DF', '#1289A7']);
            note.style.background = color;
            fileShowBox.appendChild(note);
            let noteName = document.createElement('p');
            let noteTime = document.createElement('p');
            noteName.className = 'note_name';
            noteName.innerHTML = '无标题笔记';
            noteTime.className = 'note_time';
            noteTime.innerHTML = `${year}/${month}/${day}`;
            note.appendChild(noteName);
            note.appendChild(noteTime);
            console.log(noteNum);
        }
        // console.log('li');
    }
    projectBox.style.display = 'none';
})

var noteClose = document.querySelector('.note-close');
noteClose.onclick = function () {
    noteShell.style.display = 'none';
}