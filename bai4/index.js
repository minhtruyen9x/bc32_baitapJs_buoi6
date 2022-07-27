document.getElementById('button').onclick = function () {
    let number = document.getElementById("number").value * 1;
    let output = document.getElementById("output");

    let text = '';
    for(let i = 1; i <= number; i++) {
        if(i % 2 === 0) {
            text += "<div style='background:#DC3545;color:white'>Div thứ " + i + " đỏ</div>"
        }
        else {
            text += "<div style='background:#0D6EFD;color:white'>Div thứ " + i + " xanh</div>"
        }
    }
    output.innerHTML = text;
}