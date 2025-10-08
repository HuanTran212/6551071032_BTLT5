var n = Number(prompt("Nhập n: "));

function checkSNT(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return 0;
    }
  }
  return 1;
}

for (let i = 2; i < n; i++) {
  if (checkSNT(i)) {
    document.writeln(i);
  }
}
