function HinhTru(radius, height){
    this.radius = radius;
    this.height = height;
}

var a = new HinhTru(10, 15);

document.writeln("Thể tích hình trụ: ", Math.PI*a.radius*a.radius*a.height, "<br>");

a.height = 30;

document.writeln("Diện tích toàn phần hình trụ: ", 2*Math.PI*a.radius*a.radius + 2*Math.PI*a.radius*a.height, "<br>");