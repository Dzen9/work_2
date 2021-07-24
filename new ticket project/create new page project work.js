
var btn = document.createElement("LABEL"); // Create a <button> element
btn.innerHTML = "SET MAIN VALUE"; // Insert text
btn.addEventListener("click", fnSetTopic);
// document.body.appendChild(btn); // Append <button> to <body>
var setTo = document.getElementById("issue_description_and_toolbar");
setTo.insertBefore(btn, setTo[0]);

function fnSetTopic() {
  // ***************************************************************************
  /* 
to data into new task project
issue_custom_field_values_14 - Клиент
issue_subject - Клиент
issue_subject - Тема
issue_description - Описание
issue_assigned_to_id - Назначена
issue[custom_field_values][18] - Требуется настройка системы
issue_tracker_id - Трекер 
*/

  // to create object data
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  (function () {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    Date.prototype.getMonthName = function () {
      return months[this.getMonth()];
    };
    Date.prototype.getDayName = function () {
      return days[this.getDay()];
    };
  })();
  var now = new Date();
  var day = now.getDayName();

  // to put bank where this need
  let nameClient = document.getElementById(
    "issue_custom_field_values_14"
  ).value;
  if (nameClient != null) {
    document.getElementById("issue_subject").value = nameClient;
    let textForDescription =
      "Обратившийся пользователь: _\nБанк: " +
      nameClient +
      "\nСуть проблемы: _\nНомера заявок:  _\n";
    document.getElementById("issue_subject").value = nameClient + ", ";
    document.getElementById("issue_description").value = textForDescription;
  }
  // требуется настройка системы - true
  document.getElementsByName(
    "issue[custom_field_values][18]"
  )[1].checked = true;
  // Трекер - ошибка
  document.getElementById("issue_tracker_id").value = 1;
  // Назначить ответственного
  if (day == days[1]) {
    var value = "342";
  } else if (day == days[2] || day == days[3]) {
    var value = "318";
  } else if (day == days[4] || day == days[5]) {
    var value = "247";
  }
  document.getElementById("issue_assigned_to_id").value = value;
  // ***************************************************************************
}

// add marina and pavel to task
document.querySelector('.icon-add-bullet').click();

//set deley about wait form to add them to watchers
setTimeout(function () {
  var inputs = document.getElementsByName('watcher[user_ids][]');
  inputs.forEach(element => {
    if (element.value === '355' || element.value === '237') {
      element.checked = true;
    }
  });

  document.querySelector('p.buttons input').click();
}, 500);
