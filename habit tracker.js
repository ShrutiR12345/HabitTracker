function addHabit() {
    let habitInput = document.getElementById("habitInput");
    let habitText = habitInput.value.trim();

    if (habitText === "") return;

    let li = document.createElement("li");
    li.classList.add("habit");
    li.innerHTML = `${habitText} <button onclick="markCompleted(this)">✔</button>`;
    document.getElementById("habitList").appendChild(li);

    habitInput.value = "";
}

function markCompleted(button) {
    let habitItem = button.parentElement;
    habitItem.classList.add("completed");
    button.disabled = true;
    markCalendar();
}

function generateCalendar() {
    let calendar = document.getElementById("calendar");
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        let day = document.createElement("div");
        day.classList.add("day");
        day.innerText = i;
        day.setAttribute("data-date", i);
        calendar.appendChild(day);
    }
}

function markCalendar() {
    let today = new Date();
    let date = today.getDate();
    let days = document.querySelectorAll(".day");

    days.forEach(day => {
        if (parseInt(day.innerText) === date) {
            day.classList.add("marked");
        }
    });
}

window.onload = generateCalendar;
