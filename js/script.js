let date = new Date();

function renderCalender() {
  let months = [
    "January",
    "February",
    "March",
    "Aprial",
    "May",
    "June",
    "July",
    "August",
    "Setpember",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = date.toDateString();

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let monthDays = document.querySelector(".days");

  let days = "";

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
    monthDays.innerHTML = days;
  }
}

document.querySelector("#prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

document.querySelector("#next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});

renderCalender();
