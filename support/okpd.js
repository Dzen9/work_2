// MAKE OKPD BUTTON
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
  var open = "https://yandex.ru/search/?lr=10668&text=";
  var str = "";
  if (window.getSelection().baseNode == undefined) {
    str = "";
  } else {
    str = window.getSelection().baseNode.data;

    if (str == undefined || str.match(/^\d+$/) == null) {
      str = "";
    }
  }
  window.open(open + str);
}
//=================================================================
// // FAST GO TO WRITE TEXT
// var getIdEditor = document.getElementsByClassName(
//   "ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
// )[0];
// if (getIdEditor != undefined) {
//   getIdEditor.accessKey = "q";
// }
