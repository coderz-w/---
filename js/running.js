// 音乐
let audio=document.querySelector('#aud');
// 播放，上一首，下一首和声音按钮
var audiobut=document.querySelector('.icon-24gl-playCircle');
var voice=document.querySelector(".icon-shengyinyinliang");
var beforesong=document.querySelector(".icon-diyiyeshouyeshangyishou")
var nextsong=document.querySelector(".icon-zuihouyiyemoyexiayishou")
// 播放与暂停的图标切换
audio.src='http://music.163.com/song/media/outer/url?id=317151.mp3'
function changebut() {
    if (audio.paused) {
        audio.play()
        audiobut.classList.remove('icon-24gl-playCircle')
        audiobut.classList.add('icon-zanting')
    } else {
        audio.pause()
        audiobut.classList.remove('icon-zanting')
        audiobut.classList.add('icon-24gl-playCircle')
    }
}
audiobut.addEventListener('click',function() {
    if (audio.paused) {
        audio.play()
        audiobut.classList.remove('icon-24gl-playCircle')
        audiobut.classList.add('icon-zanting')
    } else {
        audio.pause()
        audiobut.classList.remove('icon-zanting')
        audiobut.classList.add('icon-24gl-playCircle')
    }
});
// 加载音乐
function loadsong() {
if(audio !=null){
audio.load();
}
}
// 获取时间
// 格式化时间函数
function definetime(time) {
let truetime=parseInt(time);
let min=parseInt(truetime/60);
let sec=parseInt(truetime%60);
return `0${min}\:${sec}`
}
// 总时间和当前时间
    // 进度条
    const jdt=document.querySelector('#jdt');
    const pastarea=document.querySelector('.pastarea');
    const movebox=document.querySelector('.movebox');
    audio.ontimeupdate=function() {
    movebox.style.left=(audio.currentTime / audio.duration) * 100+ "%";
    pastarea.style.width=(audio.currentTime / audio.duration) * 100+ "%";
    if (audio.currentTime == 0) {
    movebox.style.left = "0%";
    }
    let alltimeword=document.querySelector('.alltime');
    let nowtimeword=document.querySelector(".nowtime");
    let alltime=audio.duration;
    let nowtime=audio.currentTime;
    alltimeword.innerHTML=definetime(alltime)
    nowtimeword.innerHTML=definetime(nowtime);
    }

