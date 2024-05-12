
const navBar = document.getElementById('input');
const menu = document.getElementsByClassName("icon")[0]; // Assuming there's only one element with class "menu"
const info = document.getElementsByClassName("dis")[0]
const info1 = document.getElementsByClassName("dis1")[0]
const info2 = document.getElementsByClassName("dis2")[0]
const info3 = document.getElementsByClassName("dis3")[0]
const info4 = document.getElementsByClassName("dis4")[0]
const info5 = document.getElementsByClassName("dis5")[0]
const info6 = document.getElementsByClassName("dis6")[0]


menu.addEventListener('click', function () {
    navBar.style.width = "15%";
    info.style.display = "flex"
    info1.style.display = "flex"
    info2.style.display = "flex"
    info3.style.display = "flex"
    info4.style.display = "flex"
    info5.style.display = "flex"
    info6.style.display = "flex"
});

var darkMode = document.querySelector('.bdy');
var content = document.querySelector('.container');


  