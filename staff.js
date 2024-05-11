document.addEventListener('DOMContentLoaded', function () {
    const staffList = document.getElementById('staffList');
    const navBar = document.getElementById('input');
const menu = document.getElementsByClassName("icon")[0]; // Assuming there's only one element with class "menu"
const info = document.getElementsByClassName("dis")[0]
const info1 = document.getElementsByClassName("dis1")[0]
const info2 = document.getElementsByClassName("dis2")[0]
const info3 = document.getElementsByClassName("dis3")[0]
const info4 = document.getElementsByClassName("dis4")[0]
const info5 = document.getElementsByClassName("dis5")[0]
const info6 = document.getElementsByClassName("dis6")[0]
const mainWidth = document.getElementsByClassName("staffList")


menu.addEventListener('click', function () {
    navBar.style.width = "15%";
    info.style.display = "flex"
    info1.style.display = "flex"
    info2.style.display = "flex"
    info3.style.display = "flex"
    info4.style.display = "flex"
    info5.style.display = "flex"
    info6.style.display = "flex"
    mainWidth.style.width = "83%"
});


    // Dummy data for staff members (replace with your actual data)
    const staffMembers = [
        { name: 'John Doe', position: 'Manager', email: 'john@example.com' },
        { name: 'Jane Smith', position: 'Assistant Manager', email: 'jane@example.com' },
        { name: 'David Brown', position: 'Sales Associate', email: 'david@example.com' }
    ];

    // Function to render staff members
    function renderStaffMembers() {
        staffList.innerHTML = '';
        staffMembers.forEach(member => {
            const staffMemberDiv = document.createElement('div');
            staffMemberDiv.classList.add('staff-member');
            staffMemberDiv.innerHTML = `
            <div class="data">
                <h2>${member.name}</h2>
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Email:</strong> <a href="mailto:${member.email}" class="email">${member.email}</a></p>
                <div/>
            `;
            staffList.appendChild(staffMemberDiv);
        });
    }

    // Call the render function when the page loads
    renderStaffMembers();
});
