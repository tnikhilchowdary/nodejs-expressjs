const {carDetails, studentDetails} = require("./sample");

const newStudents = new studentDetails("Ram", 15);
console.log(newStudents);
console.log(newStudents.name);

const newCar = new carDetails("Toyota", "60kmph");
console.log(carDetails);
console.log(carDetails.name);