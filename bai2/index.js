
document.getElementById('button').onclick = function () {
    let number = document.getElementById("number").value * 1;
    let index = document.getElementById("index").value * 1;

    let output = document.getElementById("output");

    //Kiểm tra giá trị nhập vào phải là số
    if(isNaN(number) || isNaN(index)){
        alert("Phải nhập số đúng yêu cầu");
        return
    }

    let sum = 0;
    for(let i = 1; i <= index; i++) {
        sum = sum + calc(number, i);
    }
    
    output.style.background = "#D1E8F4"
    output.innerText = "Tổng S(n) : " + sum;
}


//Hàm tính x^n:
function calc(x,n) {
    return x ** n;
}