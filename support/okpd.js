// change path

var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "OKPD"; // Insert text
btn.addEventListener("click", example);
// document.body.appendChild(btn); // Append <button> to <body>
var setTo = document.getElementsByClassName(
  "ticket-tobpar-actions__common-actions"
)[0];
setTo.appendChild(btn);
function example() {
  let str = window.getSelection().baseNode.data;
  let open = "https://yandex.ru/search/?lr=10668&text=";
  if (str == undefined || str.match(/.*\d{19}.*/) == null) {
      str = "";
  }
  window.open(open + str);
}
