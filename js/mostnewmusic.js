// 渲染最新音乐
var ul=document.getElementById("newmusicdetail");
 async function Newsong(){
       var f=await fetch(`http://localhost:3000/personalized/newsong?limit=12`,{credentials:"include"}).then(res=>res.json())
        for(let i=0;i<f.result.length;i++){
        var li=document.createElement('li');
        li.innerHTML=`<div class="newmusicimg"><img src=${f.result[i].picUrl}></div><div id="newup">${f.result[i].name}</div><div id="newdown">${f.result[i].song.artists[0].name}<img src="../img/player.png" alt="" id='aimg'></div>`
        ul.appendChild(li);
        li.onclick=function(){
        location.href='songxq.html?id=${f.result[i].id}'
        }
    }
        }
    Newsong();
        