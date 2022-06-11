// Method #1
// let personObj = new Object();
// personObj.firstname = "Joe";
// personObj.lastname = "Wu";
// personObj.age = 1688;
// personObj.eyeColor = "brown";
// personObj.smile = function() {
//     console.log("^___^");
// }
// personObj.smile();
// // document.write(personObj.firstname+"<br />");

// Method #2
// let personObj = {
//     firstname: "Joe",
//     lastname: "Wu",
//     age: 1688,
//     eyeColor: "brown",
//     smile: function () {
//         console.log("^___^");
//     }
// }
// personObj.smile();
// Method #3
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.smile = function () { console.log("^0^") };
}
var newBorn = new Person("Joe", "Wu", 1688, "Brown");
newBorn.smile();
// document.write(newBorn.lastname + "<br />");