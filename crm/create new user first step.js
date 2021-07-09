"use strict";

// *************************************
// to set name to english abriviation
function transliterate(word) {
  var answer = "",
    a = {};

  a["Ё"] = "YO";
  a["Й"] = "I";
  a["Ц"] = "TS";
  a["У"] = "U";
  a["К"] = "K";
  a["Е"] = "E";
  a["Н"] = "N";
  a["Г"] = "G";
  a["Ш"] = "SH";
  a["Щ"] = "SCH";
  a["З"] = "Z";
  a["Х"] = "H";
  a["Ъ"] = "'";
  a["ё"] = "yo";
  a["й"] = "i";
  a["ц"] = "ts";
  a["у"] = "u";
  a["к"] = "k";
  a["е"] = "e";
  a["н"] = "n";
  a["г"] = "g";
  a["ш"] = "sh";
  a["щ"] = "sch";
  a["з"] = "z";
  a["х"] = "h";
  a["ъ"] = "'";
  a["Ф"] = "F";
  a["Ы"] = "I";
  a["В"] = "V";
  a["А"] = "a";
  a["П"] = "P";
  a["Р"] = "R";
  a["О"] = "O";
  a["Л"] = "L";
  a["Д"] = "D";
  a["Ж"] = "ZH";
  a["Э"] = "E";
  a["ф"] = "f";
  a["ы"] = "i";
  a["в"] = "v";
  a["а"] = "a";
  a["п"] = "p";
  a["р"] = "r";
  a["о"] = "o";
  a["л"] = "l";
  a["д"] = "d";
  a["ж"] = "zh";
  a["э"] = "e";
  a["Я"] = "Ya";
  a["Ч"] = "CH";
  a["С"] = "S";
  a["М"] = "M";
  a["И"] = "I";
  a["Т"] = "T";
  a["Ь"] = "'";
  a["Б"] = "B";
  a["Ю"] = "YU";
  a["я"] = "ya";
  a["ч"] = "ch";
  a["с"] = "s";
  a["м"] = "m";
  a["и"] = "i";
  a["т"] = "t";
  a["ь"] = "'";
  a["б"] = "b";
  a["ю"] = "yu";

  for (let i in word) {
    if (word.hasOwnProperty(i)) {
      if (a[word[i]] === undefined) {
        answer += word[i];
      } else {
        answer += a[word[i]];
      }
    }
  }
  return answer;
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
// to get full name for fields
var sFullName = prompt(
  "Please enter full name",
  "Агаджанян Марина Анатольевна"
);

// to create password
var password = Math.random().toString(36).slice(-8);
console.log("Password:\t" + password);

// there in text must be ful name of this type агаДжанян марина АНатольевна
let arr = sFullName.toLocaleLowerCase().split(" ");
var rightArr = [];

// make first letter each word capitalize
arr.forEach((element) => {
  rightArr.push(element.capitalize());
});

// arr[0] - name
// arr[1] - sername
// arr[3] - familia
let abrivRus = arr[0] + "_" + arr[1].charAt(0);
if (arr.length == 3) {
  abrivRus += arr[2].charAt(0);
}
// name
var name = rightArr[1];
console.log("Name:\t" + name);
// sername
var surname = rightArr[0];
console.log("Surname:\t" + surname);
// result abrivEng
var abrivEng = transliterate(abrivRus);
console.log("Abreviation eng:\t" + abrivEng);

// get Inicials
if (arr.length == 3) {
  var inic =
    (rightArr[1].charAt(0) + "." + rightArr[2].charAt(0)).toLocaleUpperCase() +
    ".";
  // string Агаджанян Марина Анатольевна
  var rightFullName = rightArr[0] + " " + rightArr[1] + " " + rightArr[2];
} else if (arr.length == 2) {
  var inic = rightArr[1].charAt(0) + ".";
  // string Агаджанян Марина Анатольевна
  var rightFullName = rightArr[0] + " " + rightArr[1];
}

console.log("Inicials:\t" + inic);
console.log("Right full name:\t" + rightFullName);

var nameAndFio = rightArr[1] + " " + rightArr[0];
console.log("Name and fio:\t" + nameAndFio);

// Агаджанян Марина Анатольевна	https://agents.goodfin.ru:843/	crmgoodfinru\agadzhanyan_ma	bgkzu078	agadzhanyan_ma@crm.goodfin.ru
var textForExcel =
  rightFullName +
  "	https://agents.goodfin.ru:843/	crmgoodfinru\\" +
  abrivEng +
  "	" +
  password +
  "	" +
  abrivEng +
  "@crm.goodfin.ru	" +
  "!!!@mail!!!";

console.log("Text for EXCEL:\t" + textForExcel);

var person = prompt("Please copy the excel line", textForExcel);

// *************************************
