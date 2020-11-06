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
    "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",

];

const giveaway = document.querySelector('.giveaway')
const deadLine = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

/** 
* écrit la date de fin du compteur dans la div qui a la class ".giveaway" possible d add la date dans new Date()
*/
// definit le 31 dec 2020 a 23h59min59s
// let futureDate = new Date(2050, 10, 06, 4, 6, 59);
// si on definit une date de fin pour tous les article du site

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDay() + 1;



let futureDate = new Date(tempYear, tempMonth, tempDay + 1, 17, 6, 59);





// console.log(futureDate);
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
// console.log(futureTime);
  /** 1s = 1000ms  1m = 60s  1h = 60min  1day = 24hr */

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today
  // console.log(t);

  /**valeur en ms */

  const oneDay = 24*60*60*1000;
  // console.log(oneDay);
  const oneHour = 60*60*1000;
  // console.log(oneHour);
  const oneMinut = 60*1000;
  // console.log(oneMinuts);
  

  let days = t / oneDay;
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minuts = Math.floor((t % oneHour) /oneMinut)
  // console.log(minuts);
  let seconds = Math.floor((t % oneMinut) / 1000)
  // console.log(seconds);



function format(item) {
// add un 0 devant un chiffre 
  if (item < 10) {
    return item = `0${item}`
  }
  return item
}

  // injecter les result dans le html
const values = [days, hours, minuts, seconds];

  items.forEach(function(item, index){
    // console.log(format(values[index]));
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countDown);
    deadLine.innerHTML = `<h4 class="expired"> Yep</h4>`
  }


}

//countDown
let countDown = setInterval(getRemainingTime,1000)

getRemainingTime() 