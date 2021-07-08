// 275	Светлана Сергеева
// 282	Александр Жуков
// 286	Юлия Кузьмина
// 264	Алексей Мишуков
// 303	Алексей Марков
// 243	Андрей Боровков
// 250	Екатерина Федосова
let inputs = document.getElementsByName( "watcher[user_ids][]" );
// list with pavel and marina
inputs.forEach(element=>{
    if(["355", "237", "275", "282", "286", "264", "303", "243", "250"].includes(element.value)) {
        element.checked = true
    }
});
