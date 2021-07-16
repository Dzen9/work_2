// find marina and pasha into наблюдатели (найти наблюдателей)
let inputs = document.getElementsByName( "watcher[user_ids][]" );
inputs.forEach(element=>{if(element.value === "355" || element.value === "237") {element.checked = true}});
