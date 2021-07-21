var count = 1;

function showName() {
    if (count % 2 == 1) {
        document.getElementById('name').innerText = "란계";
        document.getElementById("call").style.backgroundColor = "red";
        count ++;
    }
    else {
        document.getElementById('name').innerText = "";
        document.getElementById("call").style.backgroundColor = "rgb(59, 167, 82)";
        count ++;
    }
}

function onClick() {
    setTimeout(showName, 2000);
}

document.getElementById("call").addEventListener("click", onClick);