document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mechanic-form');
    const mechanicList = document.getElementById('mechanic-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        mechanicList.style.display = "flex"
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const specialty = document.getElementById('specialty').value;

        if (name && phone && specialty) {
            addMechanic(name, phone, specialty);
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });

function addMechanic(name, phone, specialty) {
    const mechanicItem = document.createElement('div');
    mechanicItem.classList.add('mechanic-item');
    mechanicItem.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Specialty</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${specialty}</td>
                </tr>
            </tbody>
        </table>
    `;
    mechanicList.appendChild(mechanicItem);
}

});

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