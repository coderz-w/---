// 推荐歌单渲染
async function demo(){
    let a=await fetch("http://localhost:3000/login/cellphone?phone=19922077117&password=wqnmlgb123...");
    let b=await a.json();
    let c=await b.cookie;
    let d=await encodeURIComponent(c);
    var f=await fetch(`http://localhost:3000/top/playlist?limit=10&order=new?cookie=${d}`,{credentials:"include"}).then(res=>res.json())
    for(let i=0;i<10;i++){
    var ul=document.getElementById("ngm");
    var li=document.createElement('li');
    li.innerHTML=`<li><img src="${f.playlists[i].coverImgUrl}" alt="" class="tjpic"><span id='liseners'>${Math.trunc(f.playlists[i].playCount/10000)}万</span><h4>${f.playlists[i].name}</h4></li>`
    ul.appendChild(li);
    li.onclick=function(){
    location.href='gdxq.html?id=${f.playlists[i].id}'
    }
}
    }
    demo();
    