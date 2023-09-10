const mod = document.querySelector('.mod');
const main = document.querySelector('.main');
var modState = 0;
document.onmouseup = function (e) {
    if (e.button == 2) {
        mod.style.display = 'block';
        main.style.display = 'none';
        bg.style = 'transform:scale(1.1);filter:blur(10px)';
        modState = 1;
    }
    if (e.button == 0 && modState == 1) {
        if (e.target.className == 'music') {
            musicShell.style.display = 'block'; // 打开音乐界面
            musicLittle.style.display = 'none'; // 关闭小窗
            setTimeout(() => {
                musicShell.style.opacity = 1;
            }, 500)
            tip(3, '成功打开音乐')
        }
        if (e.target.className == 'mod-note') {
            noteShell.style.display = 'block';
            tip(3, '成功打开便签')
        }
        if (e.target.className == 'mod-date') {
            tip(2, '日历待开发中')
        }
        if (e.target.className == 'mod-div') {  // 模块二div
            return
        } else {    // 界面转换
            mod.style.display = 'none';
            main.style.display = 'block';
            bg.style = 'transform:scale(1);filter:blur(0px)';
            modState = 0;
        }
        // console.dir(e.target);
        // console.log(musicShell);
    }
}