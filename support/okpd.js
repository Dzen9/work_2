// change path

var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "OKPD"; // Insert text
btn.addEventListener("click", example);
// document.body.appendChild(btn); // Append <button> to <body>
var setTo = document.getElementsByClassName("ticket-tobpar-actions__common-actions")[0];
setTo.appendChild(btn);
function example() {
  window.open("https://yandex.ru/search/?lr=10668&text=" + window.getSelection().baseNode.data);
}
