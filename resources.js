document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mechanic-form');
    const mechanicList = document.getElementById('mechanic-list');

    const TForm = document.getElementsByClassName("smb")[0]; // Assuming there's only one element with class "smb"
    TForm.addEventListener('click', function ()  {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const specialty = document.getElementById('specialty').value;
        const error = document.getElementById('error');
        if ([name,specialty,phone]) {
            const tableElement = document.getElementById('table');
            let tbodyElement = tableElement.querySelector('tbody');
            if (!tbodyElement) {
                tbodyElement = document.createElement('tbody');
                tableElement.appendChild(tbodyElement);
            }
            const trElement = document.createElement('tr');
            const nameEle = document.createElement('td');
            const phoneEle = document.createElement('td');
            const specialtyEle = document.createElement('td');
            nameEle.innerHTML = name;
            phoneEle.innerHTML = phone;
            specialtyEle.innerHTML = specialty;
            trElement.appendChild(nameEle);
            trElement.appendChild(phoneEle);
            trElement.appendChild(specialtyEle);
            tbodyElement.appendChild(trElement);
        }
    });
});

const navBar = document.getElementById('input');
const menu = document.getElementsByClassName("icon")[0]; // Assuming there's only one element with class "menu"
const info = document.getElementsByClassName("dis")[0];
const info1 = document.getElementsByClassName("dis1")[0];
const info2 = document.getElementsByClassName("dis2")[0];
const info3 = document.getElementsByClassName("dis3")[0];
const info4 = document.getElementsByClassName("dis4")[0];
const info5 = document.getElementsByClassName("dis5")[0];
const info6 = document.getElementsByClassName("dis6")[0];

menu.addEventListener('click', function () {
    navBar.style.width = "15%";
    info.style.display = "flex";
    info1.style.display = "flex";
    info2.style.display = "flex";
    info3.style.display = "flex";
    info4.style.display = "flex";
    info5.style.display = "flex";
    info6.style.display = "flex";
});
