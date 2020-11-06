const months = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Jun",
  "Jullet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const weekdays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const giveaway = document.querySelector('.giveaway')
const deadLine = document.querySelector('.deadline')
const items = document.querySelector('.deadline-format h4')

/** 
* écrit la date de fin du compteur dans la div qui a la class ".giveaway" possible d add la date dans new Date()
*/
// definit le 31 dec 2020 a 23h59min59s
let futureDate = new Date(2020, 11, 31, 23, 59, 59);
console.log(futureDate);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
let month = futureDate.getMonth()
// console.log(month);
month = months[month]
// console.log(month);
const date = futureDate.getDate()
// console.log(date);
const weekday = weekdays[futureDate.getDay()];
// console.log(weeckday);
// console.log(weekday);
giveaway.textContent = `fin de l'année le ${weekday} ${date} ${month} ${year} ${hour}:${minutes}:${seconds}`;

/** future time in ms */
const futureTime = futureDate.getTime()
console.log(futureTime);
  /** 1s = 1000ms  1m = 60s  1h = 60min  1day = 24hr */

function getRemainingTime() {
  const today = new Date().getTime();
  console.log(today);
  const t = futureTime - today
  console.log(t);

  /**valeur en ms */

  const oneDay = 24*60*60*1000;
  console.log(oneDay);

}

getRemainingTime() 