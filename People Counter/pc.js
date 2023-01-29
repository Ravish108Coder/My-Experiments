let newvalue = document.getElementById("count-el")
let temp = 0

function increMent() {
    temp = temp + 1
    newvalue.innerHTML = temp
}
function reset() {
    temp = 0
    newvalue.innerHTML = temp
}

function decreMent() {
    if(temp!=0){
    temp = temp - 1}
    newvalue.innerText = temp
}