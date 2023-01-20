
    var a=document.querySelector("#gdlistnav")
    var b=document.querySelector('#insertgdheaderright').querySelector('div')
    var c=document.querySelector('#insertgdheaderleft').querySelector('img')
    c.onclick=function() {
        console.log(999)
        }
    b.onclick=function() {
    console.log(888)
    }
    const navl=a.querySelectorAll('div');
    console.log(navl,'navl');
    navl[0].onclick=function() {
    console.log(5)
    }
    navl[1].onclick=function() {
    console.log(5)
    }
    navl[2].onclick=function() {
     console.log(5)
    }
    a.onclick=function() {
    console.log(6)
    }
    navl[1].onmouseover=function() {
    console.log(555)
    }
// 有问题