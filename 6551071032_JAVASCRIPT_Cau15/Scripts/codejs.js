function User(Name, Age) {
  this.Name = Name;
  this.Age = Age;
}

var u = new User("Max", 20);

document.writeln("Name: ", u.Name, "<br>");
document.writeln("Age: ", u.Age, "<br>");

u.Surname = "Lee";

u.Age = 30;

document.writeln("Name: ", u.Name, "<br>");
document.writeln("Age: ", u.Age, "<br>");
document.writeln("Surname: ", u.Surname, "<br>");
