let sc = document.getElementById("sc");
let mn = document.getElementById("mn");
let hr = document.querySelector("#hr")

setInterval (() =>{
let day = new Date();
let hh = day.getHours();
let mm = day.getMinutes();
let ss = day.getSeconds();

let hH = 30 * hh + mm/2;
let mH = 6 * mm;
let sH = 6 * ss;

hr.style.transform = "rotateZ(${hH}deg)";
mn.style.transform = "rotateZ(${mH}deg)";
sc.style.transform = "rotateZ(${sH}deg)";
}, 1000);


// let b = document.querySelector("body")
// b.style.background = "#"

hr.style.backgroundColor = "red";
hr.style.transform = rotate (180deg)


