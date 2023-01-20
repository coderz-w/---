var searchbut = document.querySelector(".search").querySelector("input");
var hotsearchbox = document.querySelector("#hotsearchbox");
// 热搜榜
searchbut.addEventListener("focus", function () {
  hotsearchbox.style.display = "block";
});
searchbut.addEventListener("blur", function () {
  hotsearchbox.style.display = "none";
});
// 监听搜索
document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key == "Enter") {
    console.log(searchbut.value);
  }
});
// 搜索函数
async function searchthing(keyword) {}

// 渲染榜单
async function xrrs() {
  const imformation = await fetch(`http://localhost:3000/search/hot/detail`, {
    credentials: "include",
  }).then((res) => res.json());
  for (let i = 0; i < imformation.data.length; i++) {
    const rsbox = document.querySelector("#hotsearchlist");
    const div = document.createElement("div");
    div.innerHTML = `<div id="rsleft">${i + 1}</div>
    <div id="rsright">
      <div id="rsrighttop"><span id="rsrighttop1">${
        imformation.data[i].searchWord
      }</span><span id="rsrighttop2">${imformation.data[i].score}</span></div>
      <h1 id="rsrightdown">${imformation.data[i].content}</h1>
    </div>`;
    rsbox.appendChild(div);
  }
}
xrrs();

// 默认搜索词
async function morenword() {
  var searchbut = document.querySelector(".search").querySelector("input");
  const word = await fetch(`http://localhost:3000/search/default`, {
    credentials: "include",
  }).then((res) => res.json());
  searchbut.setAttribute("placeholder", word.data.showKeyword);
}
morenword();
