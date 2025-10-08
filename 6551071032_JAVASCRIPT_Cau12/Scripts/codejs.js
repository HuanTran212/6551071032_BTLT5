function tinhMu() {
  const b = parseFloat(document.getElementById("b").value);
  const n = parseFloat(document.getElementById("n").value);
  const ketQuaEl = document.getElementById("ketQua");

  if (isNaN(b) || isNaN(n)) {
    ketQuaEl.textContent = "Vui lòng nhập số hợp lệ cho cả b và n.";
    return;
  }

  const ketQua = Math.pow(b, n);
  ketQuaEl.textContent = `${b} mũ ${n} là: ${ketQua}`;
}
