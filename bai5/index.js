document.getElementById('button').onclick = function () {
    let number = document.getElementById("number").value * 1;
    let output = document.getElementById("output");

    //kiểm tra số number phải lớn hơn không mới bắt đầu tính toán
    if(number < 0 || isNaN(number)) {
        alert("Phải nhập số lớn hơn 0");
        return
    }

    let text = '';

    for(let i = 2; i <= number; i++) {
        if(isPrime(i)) {
            text += i + " ";
        }
    }

    output.style.background = "#D1E8F4"
    output.innerText = text;
}


//function kiểm tra số nguyên tố
function isPrime (n) {
    for(let i = 2; i <= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}