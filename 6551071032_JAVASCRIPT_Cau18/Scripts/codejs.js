var a = window.prompt("Nhập số n:");

Math.tinhGiaiThua = function(number){
    var ans = 1;
    for(i = number; i > 0; i--){
        ans *= i;
    }
    return ans;
};

document.writeln("Giai thừa của ", a, " là: ", Math.tinhGiaiThua(a));