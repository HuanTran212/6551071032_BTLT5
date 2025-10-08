function Student(Name, NumberID, Gender){
    this.Name = Name;
    this.NumberID = NumberID;
    this.Gender = Gender;
}

var student1 = new Student("Trần Minh Huấn", "2121", "Male");

document.writeln("Thông tin sinh viên:<br>");
document.writeln("Tên: ", student1.Name, "<br>");
document.writeln("Id: ", student1.NumberID, "<br>");
document.writeln("Giới tính: ", student1.Gender, "<br>");