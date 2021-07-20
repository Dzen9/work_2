// MAKE OKPD BUTTON
// change path
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "OKPD"; // Insert text
btn.addEventListener("click", fnFindOKPD);
// document.body.appendChild(btn); // Append <button> to <body>
var setTo = document.getElementsByClassName(
  "ticket-tobpar-actions__common-actions"
)[0];
setTo.appendChild(btn);
function fnFindOKPD() {
  let open = "https://psb.itfinance.io/admin/ebb/tenders/?q=";
  let str = "";
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
// TO FIND TOPIC IN SEARCH
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "SCH PR D"; // Insert text
btn.addEventListener("click", fnFindProjInSearchDescription);
setTo.appendChild(btn);

function fnFindProjInSearchDescription() {
  let value = prompt("Please input topic for serching", "");

  if (value != undefined) {
    window.open(
      "https://projects.srvhub.tools/issues?utf8=%E2%9C%93&set_filter=1&sort=updated_on%3Adesc%2Cstart_date%3Adesc%2Cid%3Adesc&f%5B%5D=subject&op%5Bsubject%5D=*&f%5B%5D=description&op%5Bdescription%5D=%7E&v%5Bdescription%5D%5B%5D=" +
        encodeURI(value) +
        "&f%5B%5D=&c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=cf_14&c%5B%5D=subject&c%5B%5D=author&c%5B%5D=assigned_to&c%5B%5D=start_date&c%5B%5D=updated_on&c%5B%5D=status&c%5B%5D=cf_15&group_by=&t%5B%5D="
    );
  }
}
//=================================================================
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "SCH PR T"; // Insert text
btn.addEventListener("click", fnFindProjInSearchTopic);
setTo.appendChild(btn);

function fnFindProjInSearchTopic() {
  let value = prompt("Please input topic for serching", "");

  if (value != undefined) {
    window.open(
      "https://projects.srvhub.tools/issues?utf8=%E2%9C%93&set_filter=1&sort=updated_on%3Adesc%2Cstart_date%3Adesc%2Cid%3Adesc&f%5B%5D=subject&op%5Bsubject%5D=%7E&v%5Bsubject%5D%5B%5D=" +
        encodeURI(value) +
        "&f%5B%5D=description&op%5Bdescription%5D=*&f%5B%5D=&c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=cf_14&c%5B%5D=subject&c%5B%5D=author&c%5B%5D=assigned_to&c%5B%5D=start_date&c%5B%5D=updated_on&c%5B%5D=status&c%5B%5D=cf_15&group_by=&t%5B%5D="
    );
  }
}

// ================================================================
var btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "SCH SUP"; // Insert text
btn.addEventListener("click", fnFindTopicInSupport);
setTo.appendChild(btn);

function fnFindTopicInSupport() {
  let value = prompt("Please input topic for serching", "");

  if (value != undefined) {
    window.open(
      "https://support.srvhub.ru/ru/ticket/list/filter/id/search/page/1?search=" +
        encodeURI(value)
    );
  }
}

// ================================================================
// // FAST GO TO WRITE TEXT
// var getIdEditor = document.getElementsByClassName(
//   "ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
// )[0];
// if (getIdEditor != undefined) {
//   getIdEditor.accessKey = "q";
// }
