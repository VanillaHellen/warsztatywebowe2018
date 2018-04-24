function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
/*
////////////////ZAD 1
function changeClr(){
    var x = document.getElementById("redbro");
    x.style.background = random_rgba();
}

function clickd(){
    var btn = window.setTimeout(changeClr, 2000);
}

////////////////ZAD 2 + 2.1
var intervalID = window.setInterval(changeClr, 1000);
window.clearInterval(intervalID);

function changeClr(){
    var x = document.getElementById("redbro");
    x.style.background = random_rgba();
}

function clickd(){
    inputfield = document.getElementById("num");
    if (inputfield.value) {
        window.clearInterval(intervalID);
        intervalID = window.setInterval(changeClr, inputfield.value);
    } else { 
        window.clearInterval(intervalID);
        intervalID = window.setInterval(changeClr, 500);
    }

}

function clickd2(){
    window.clearInterval(intervalID);
}
*/

var data = new Date()
console.log(data.getDay)