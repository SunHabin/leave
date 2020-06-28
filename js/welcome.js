const clockContainer = document.querySelector(".wel-clock");
const dateTitle = clockContainer.querySelector("#date");
const clockTitle = clockContainer.querySelector("#time");

function getTime() {
  /* 시간 객체를 생성하고 시간, 분, 초를 받아온다 */
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  /* h1 태그 내부에 시간을 출력 - 한자리수인경우 0이 앞에 붙지 않아 삼항연산자 사용 */
  dateTitle.innerHTML = `${years}. ${months < 10 ? `0${months}` : months}. ${
    days < 10 ? `0${days}` : days
  }`;

  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

/* 특정 함수를 일정시간 간격으로 실행 */
function init() {
  getTime();
  setInterval(getTime, 1000);
}

/* 함수를 정의한뒤 실행시켜 주기 위한 실행문 */
init();
