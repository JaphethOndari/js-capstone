document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendarBody');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const currentMonthYear = document.getElementById('currentMonthYear');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let events = []; // Array to store events

    renderCalendar(currentMonth, currentYear);

    prevMonthBtn.addEventListener('click', function () {
        currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        renderCalendar(currentMonth, currentYear);
    });
    

    function renderCalendar(month, year) {
        calendarBody.innerHTML = '';
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

        currentMonthYear.innerText = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

        for (let i = 0; i < firstDayOfMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            calendarBody.appendChild(dayElement);
        }

        for (let i = 1; i <= lastDayOfMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = i;
            dayElement.classList.add('calendar-day');
            const date = new Date(year, month, i);
            if (year < currentDate.getFullYear() - 2 || (year === currentDate.getFullYear() - 2 && month < currentDate.getMonth())) {
                dayElement.classList.add('past');
            } else {
                if (hasEvent(date)) {
                    dayElement.classList.add('has-event');
                    dayElement.setAttribute('data-tooltip', getEventPreview(date));
                }
                dayElement.addEventListener('click', function () {
                    const date = new Date(year, month, i);
                    showEventModal(date);
                });
            }
            calendarBody.appendChild(dayElement);
        }
    }

    function hasEvent(date) {
        return events.some(event => event.date.getTime() === date.getTime());
    }

    function getEventPreview(date) {
        const eventsForDate = events.filter(event => event.date.getTime() === date.getTime());
        return eventsForDate.map(event => `${event.name}: ${event.info}`).join('\n');
    }

    function showEventModal(date) {
        // Clear previous event modal
        const modal = document.getElementById('eventModal');
        modal.innerHTML = '';

        // Add event form
        const form = document.createElement('form');
        form.innerHTML = `
            <h3>Add Event</h3>
            <label for="eventName">Event Name:</label>
            <input type="text" id="eventName" required><br>
            <label for="eventInfo">Event Info:</label>
            <textarea id="eventInfo" rows="4" required></textarea><br>
            <button type="submit">Save</button>
        `;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const eventName = document.getElementById('eventName').value;
            const eventInfo = document.getElementById('eventInfo').value;
            events.push({ date, name: eventName, info: eventInfo });
            renderCalendar(currentMonth, currentYear); // Refresh calendar
            modal.style.display = 'none';
        });
        modal.appendChild(form);

        // Display events for the selected date
        const eventsForDate = events.filter(event => event.date.getTime() === date.getTime());
        if (eventsForDate.length > 0) {
            const eventList = document.createElement('ul');
            eventList.innerHTML = '<h3>Events for this Date:</h3>';
            eventsForDate.forEach(event => {
                const listItem = document.createElement('li');
                listItem.textContent = `${event.name}: ${event.info}`;
                eventList.appendChild(listItem);
            });
            modal.appendChild(eventList);
        }

        modal.style.display = 'block';

        
    }
    
});
