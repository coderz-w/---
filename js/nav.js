// 导航栏效果
const nav=document.querySelectorAll("#snav");
for(let i=0;i<nav.length;i++){
nav[i].onclick=function() {
for(let i=0;i<nav.length;i++){
nav[i].classList.remove('touched');
this.classList.add('touched');
}
}
}

