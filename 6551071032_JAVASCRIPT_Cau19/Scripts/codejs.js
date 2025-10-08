function tinhLaiSuat(){
    var tienGoc = parseFloat(document.getElementById("tienGoc").value);
    var laiSuat = parseFloat(document.getElementById("laiSuat").value);
    var nam = parseFloat(document.getElementById("nam").value);

    var tienLai = tienGoc;

    for(i = 1; i <= nam; i++){
        tienLai += (tienLai*(laiSuat/100));
    }
    
    document.getElementById("ketQua").innerText = "Tiền lãi là: " + tienLai;
}