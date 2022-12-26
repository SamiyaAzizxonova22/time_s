const week = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chroshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
const month = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const sanaEl = document.querySelector(".sana");
const haftaKuniEl = document.querySelector(".hafta-kuni");
const oyEl = document.querySelector(".oy");
const yilEl = document.querySelector(".yil");

setInterval(() => {
  const allDate = new Date();
  const hours = allDate.getHours();
  const minutes = allDate.getMinutes();
  const seconds = allDate.getSeconds();
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${hours} : ${minutes} : ${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}, 1000);

const allDate = new Date();

// kun
sanaEl.innerHTML = allDate.getDate();

// oy
oyEl.innerHTML = month[allDate.getMonth()];

// xafta kuni
haftaKuniEl.innerHTML = week[allDate.getDay()];

// yil
yilEl.innerHTML = allDate.getFullYear();
