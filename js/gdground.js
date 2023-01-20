// 渲染歌单广场
async function gdground() {
  const gddetail = document.querySelector("#insertgd");
  const nav = document.querySelectorAll("#snav");
  const div = document.querySelector("#gdground");
  nav[2].onclick = function () {
    nav[0].classList.remove("touched");
    nav[1].classList.remove("touched");
    nav[3].classList.remove("touched");
    nav[4].classList.remove("touched");
    nav[5].classList.remove("touched");
    this.classList.add("touched");
    div.style.display = "block";
  };
  // f为歌单集合
  var f = await fetch(`http://localhost:3000/top/playlist?limit=50&order=hot`, {
    credentials: "include",
  }).then((res) => res.json());
  var ul = document.querySelector("#aiyuo");
  for (let i = 0; i < 50; i++) {
    var li = document.createElement("li");
    // 某一歌单id
    let key = f.playlists[i].id;
    li.innerHTML = `<img src="${
      f.playlists[i].coverImgUrl
    }" class="aiyuoimg"><span id='aiyuolisener'>${Math.trunc(
      f.playlists[i].playCount / 10000
    )}万</span><h4 id='aiyuoa'>${f.playlists[i].name}</h4><span id='aiyuocre'>${
      f.playlists[i].creator.nickname
    }</span>`;
    ul.appendChild(li);
    li.onclick = async function () {
      gddetail.style.display = "block";

      var insertpl = document.querySelector("#insertpl");
      insertpl.style.display = "block";
      gddetail.innerHTML = `<div id="insertgdheader">     
<div id="insertgdheaderleft"><img src="${
        f.playlists[i].coverImgUrl
      }" alt=""></div>
<div id="insertgdheaderright">
<h1>${f.playlists[i].name}</h1>
<h2>创建者：${f.playlists[i].creator.nickname}</h2>
<div>播放按钮</div>
<h4>歌曲:${
        f.playlists[i].trackCount
      }&nbsp;&nbsp;&nbsp;&nbsp;播放量:${Math.trunc(
        f.playlists[i].playCount / 10000
      )}万</h4>
</div>
</div>
<!-- 歌单列表和评论 -->
<div id="gdlistnav">
  <div onclic='a()'>歌曲列表</div>
  <div>评论</div>
  <div>收藏者</div>
</div>
<div id="gdlistheader">
  <div class="gdlistheader1">操作</div>
  <div class="gdlistheader2">标题</div>
  <div class="gdlistheader3">歌手</div>
  <div class="gdlistheader4">专辑</div>
  <div class="gdlistheader5">时间</div>
</div>
<div id='gdlistbody'></div>`;
      // 渲染评论
      var plbut = document.querySelector("#plbut");
      var pldetail = document.querySelector("#pldetail");
      const pl = await fetch(
        `http://localhost:3000/comment/playlist?id=${key}`,
        { credentials: "include" }
      ).then((res) => res.json());
      var pldiv = document.createElement("div");
      console.log(pl.comments.length);
      console.log(pldetail);
      for (let t = 0; t < pl.comments.length; t++) {
        insertpl.innerHTML = `<div id="insertgdheader">     
        <div id="insertgdheaderleft"><img src="${
          f.playlists[i].coverImgUrl
        }" alt=""></div>
        <div id="insertgdheaderright">
        <h1>${f.playlists[i].name}</h1>
        <h2>创建者：${f.playlists[i].creator.nickname}</h2>
        <div>播放按钮</div>
        <h4>歌曲:${
          f.playlists[i].trackCount
        }&nbsp;&nbsp;&nbsp;&nbsp;播放量:${Math.trunc(
          f.playlists[i].playCount / 10000
        )}万</h4>
        </div>
        </div>
        <!-- 歌单列表和评论 -->
        <div id="gdlistnav">
          <div onclic='a()'>歌曲列表</div>
          <div>评论</div>
          <div>收藏者</div>
        </div><textarea id="plbox"></textarea>
        <div id="plbut">评论</div>
        <h1>最新评论</h1>+${pldiv.innerHTML}`;
        pldiv.innerHTML += `
 <div id='plleft'><img src="${pl.comments[t].user.avatarUrl}"></div>
<div id='plright'>
<h2>${pl.comments[t].user.nickname}&nbsp;:&nbsp;&nbsp;${pl.comments[t].content}</h2>
<h3>${pl.comments[t].timeStr}</h3>
</div>`;
        pldetail.appendChild(pldiv);
      }

      // 评论功能
      plbut.onclick = function () {
        console.log(plbut);
      };

      // 渲染歌曲列表
      for (let t = 0; t < f.playlists[i].trackCount; t++) {
        let h = await fetch(
          `http://localhost:3000/playlist/track/all?id=${key}`,
          { credentials: "include" }
        ).then((res) => res.json());
        let head = document.querySelector("#gdlistbody");
        let divlist = document.createElement("div");
        divlist.innerHTML = `
    <div class="gdlistheader1">${t + 1}</div>
    <div class="gdlistheader2">${h.songs[t].name}</div>
    <div class="gdlistheader3">${h.songs[t].ar[0].name}</div>
    <div class="gdlistheader4">${h.songs[t].al.name}</div>
    <div class="gdlistheader5">时间</div>
    `;
        head.appendChild(divlist);
        // 播放效果
        var audio = document.querySelector("#aud");
        divlist.onclick = function () {
          // 点击播放传递图片歌名到底部并改变播放键
          var songimg = document.querySelector("#picing").querySelector("img");
          var songname = document.querySelector("#songname");
          var singer = document.querySelector("#singer");
          var audiobut = document.querySelector(".icon-24gl-playCircle");
          audio.src = `https://music.163.com/song/media/outer/url?id=${h.songs[t].id}.mp3`;
          audio.play();
          songimg.src = `${h.songs[t].al.picUrl}`;
          songname.innerHTML = `${h.songs[t].name}`;
          singer.innerHTML = `${h.songs[t].ar[0].name}`;
          audiobut.className = "iconfont icon-zanting";
          //  下一首
          var nextsong = document.querySelector(
            ".icon-zuihouyiyemoyexiayishou"
          );
          nextsong.onclick = function () {
            if (t == h.songs.length - 1) {
              t = -1;
            }
            audio.src = `https://music.163.com/song/media/outer/url?id=${
              h.songs[t + 1].id
            }.mp3`;
            audio.play();
            songimg.src = `${h.songs[t + 1].al.picUrl}`;
            songname.innerHTML = `${h.songs[t + 1].name}`;
            singer.innerHTML = `${h.songs[t + 1].ar[0].name}`;
            t = t + 1;
            if (audio.paused) {
              audio.play();
              audiobut.classList.remove("icon-24gl-playCircle");
              audiobut.classList.add("icon-zanting");
            } else {
              audio.pause();
              audiobut.classList.remove("icon-zanting");
              audiobut.classList.add("icon-24gl-playCircle");
            }
          };
          // 上一首
          var beforesong = document.querySelector(
            ".icon-diyiyeshouyeshangyishou"
          );
          beforesong.onclick = function () {
            if (t == 0) {
              t = h.songs.length;
            }
            audio.src = `https://music.163.com/song/media/outer/url?id=${
              h.songs[t - 1].id
            }.mp3`;
            audio.play();
            songimg.src = `${h.songs[t - 1].al.picUrl}`;
            songname.innerHTML = `${h.songs[t - 1].name}`;
            singer.innerHTML = `${h.songs[t - 1].ar[0].name}`;
            t = t - 1;
            if (audio.paused) {
              audio.play();
              audiobut.classList.remove("icon-bofang");
              audiobut.classList.add("icon-zanting");
            } else {
              audio.pause();
              audiobut.classList.remove("icon-zanting");
              audiobut.classList.add("icon-bofang");
            }
          };
        };
      }
    };
  }
}

gdground();
