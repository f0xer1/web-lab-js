const weekDays = ["Субота", "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];


function calculateWeekDay() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let tempDate = new Date(year, month - 1, day);
    if (tempDate.getDate() !== day || tempDate.getMonth() !== month - 1 || tempDate.getFullYear() !== year) {
        document.getElementById("weekDay").textContent = "Не існує";
        return;
    }

    if (month < 3) {
        month += 12;
        year--;
    }
    let k = year % 100;
    let j = Math.floor(year / 100);
    let weekDay = (day + Math.floor((13 * (month + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7;

    document.getElementById("weekDay").textContent = weekDays[weekDay];
}