/* event.js */

var num = 0;

function count_btn() {
    var count = document.getElementsByClassName('current_num');
    count[0].innerHTML = num;
    console.log(num);
    num ++;
}

function reset_btn() {
    var count = document.getElementsByClassName('current_num');
    count[0].innerHTML = "Let's Start!";
    num = 0;
    console.clear();
}