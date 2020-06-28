const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const login = document.querySelector(".navbar_login");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  login.classList.toggle("active");
  /* menu와 login의 상태를 클릭할때마다 바꾸어준다.*/
});

/* 슬라이드 이미지 부분*/
const all = (ele) => document.querySelectorAll(ele);
const one = (ele) => document.querySelector(ele);
const slide = (_) => {
  const wrap = one(".slide");
  const target = wrap.children[0];
  const len = target.children.length;
  const liStyle = `
    position:absolute;
    left:0;right:0;top:0;bottom:0;transition:1s;opacity:0
  `;
  target.style.cssText = `position:relative;`;
  Array.from(target.children).forEach((ele) => (ele.style.cssText = liStyle));
  target.children[0].style.opacity = 1;
  let pos = 0;
  setInterval((_) => {
    target.children[pos].style.opacity = 0;
    pos = (pos + 1) % len;
    target.children[pos].style.opacity = 1;
  }, 2400);
};
window.onload = function () {
  slide();
};
