// 轮播图
window.onload=()=>{
    var img=document.querySelectorAll('.cimg');
    var left=document.querySelector('.syz');
    var right=document.querySelector(".xyz");
    var buttons=document.querySelectorAll('.lbb')
    lbarr=['first','second','right','left','left','left','left','last']
    lbgetid();
    // 图片索引
    var picnum=0
    // 定时器
    var timer=setInterval(downp,6000);
    // 切换图片的函数
    function upp(){
    lbarr.push(lbarr.shift());
    lbgetid();
    if(picnum==0){picnum=buttons.length-1}
    else{picnum--}
    cchange();
    }
    function downp() {
    lbarr.unshift(lbarr.pop());
    lbgetid();
    if(picnum==buttons.length-1){
        picnum=0
    }
    else{picnum++}
    cchange();
    }
    // 给图片更换id
    function lbgetid(){
    for(let i=0;i<img.length;i++){
    img[i].id=lbarr[i];
    }
    }
    function cchange(){
    for(let i=0;i<buttons.length;i++){
    buttons[i].style.backgrondColor="silver";
    }
    buttons[picnum].classList.add("bblred");
    }
    // 点击箭头事件
    left.addEventListener('click',upp);
    right.addEventListener('click',downp);
    // 小圆点点击效果
    for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("mouseover",()=>{
    if(picnum>i){
    let x=picnum-i;
    while(x--){
    upp();
    }
    }
    else if(picnum<i){
    let x=i-picnum;
    while(x--){
    downp();
    }
    }
    })
    }
    // 暂停效果
    left.addEventListener("mouseover",()=>{
    clearInterval(timer);
    timer=null;
    })
    left.addEventListener("mouseout",()=>{
    timer=setInterval(downp,3000);})
    right.addEventListener("mouseover",()=>{
        clearInterval(timer);
        timer=null;
        })
    right.addEventListener("mouseout",()=>{
    timer=setInterval(downp,3000);
    })
     for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("mouseout",()=>{
            timer=setInterval(downp,3000);
            })
     }
     for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('mouseover',()=>[
            clearInterval(timer),
            timer=null
        ])
     }
    }