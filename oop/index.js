// OOP Concepts and doing some practice
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "My name is: ".concat(this.name, " and age is: ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person("Noman", 69);
// console.log(person1.introduce());
