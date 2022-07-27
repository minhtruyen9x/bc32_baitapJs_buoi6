document.getElementById('button').onclick = function () {
    let number = document.getElementById("number").value * 1;
    let output = document.getElementById("output");

    //kiểm tra số number phải lớn hơn không mới bắt đầu tính toán
    if(number < 0 || isNaN(number)) {
        alert("Phải nhập số lớn hơn 0");
        return
    }

    let sum = 0;
    let n = 0;
    
    while (true) {
        n++;
        sum += n;
        if(sum > number) break;
    }
    output.style.background = "#D1E8F4"
    output.innerText = "số nguyên dương nhỏ nhất đạt yêu cầu là: " + n;
}
document.getElementById('button').click();