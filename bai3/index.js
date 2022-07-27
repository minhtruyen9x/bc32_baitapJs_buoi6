
document.getElementById('button').onclick = function () {
    let number = document.getElementById("number").value * 1;

    let output = document.getElementById("output");
    
    //kiểm tra số nguyên dương,nếu sai thì không tiếp tục tính toán
    if(isNaN(number) || number < 0 || !Number.isInteger(number)) {
        alert("Yêu cầu nhập số nguyên dương")
        return
    }

    let sum = 1;
    for(let i = 1; i <= number; i++) {
        sum = sum * i;
    }
    output.style.background = "#D1E8F4"
    output.innerText = "Tổng S(n) : " + sum;
}

