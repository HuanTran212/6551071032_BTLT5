var a = window.prompt("Nhập hệ cơ số 2: ");

Math.chuyen2Sang10 = function(number){
    return parseInt(number, 2);
};

document.writeln("Hệ cơ số 10 của ", Math.chuyen2Sang10(a));