function hienThiThoiGian(){
    var today = new Date();

    var ngay = today.getDate();
    var thang = today.getMonth() + 1;
    var nam = today.getFullYear();

    var gio = today.getHours();
    var phut = today.getMinutes();
    var giay = today.getSeconds();

    var result = "Ngày: " + ngay + "/" + thang + "/" + nam + " Giờ: " + gio + ":" + phut + ":" + giay;

    alert(result);
}