var a = prompt("Nhập số:");
var b = "";

for (i = 1; i <= a.length; i++) {
  b += a[a.length - i];
}

document.writeln("Số đảo ngược: ", b);
