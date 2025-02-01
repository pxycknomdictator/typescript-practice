// OOP Concepts and doing some practice
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance < amount) {
            return "You don't have efficient balance";
        }
        this.balance = this.balance - amount;
        return this.balance;
    };
    return BankAccount;
}());
var nomanAccount = new BankAccount(9000);
// nomanAccount.deposit(4000);
// console.log(nomanAccount.withdraw(3000));
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Vehicle.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Speed: ").concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, speed, fuelType) {
        var _this = _super.call(this, brand, speed) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    Car.prototype.getFuelType = function () {
        return this.fuelType;
    };
    Car.prototype.setFuelType = function (fuelType) {
        this.fuelType = fuelType;
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 120, "Petrol");
// console.log(myCar.getFuelType());
// myCar.setFuelType("Diesel");
// console.log(myCar.getFuelType());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "".concat(this.name, " meows");
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, " barks");
    };
    return Dog;
}(Animal));
var cat1 = new Cat("Tom");
// console.log(cat1.makeSound());
var dog1 = new Dog("Spike");
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (newPrice) {
        if (newPrice >= 0) {
            this.price = newPrice;
        }
        else {
            console.log("Price cannot be negative!");
        }
    };
    Product.prototype.getDetails = function () {
        return "".concat(this.name, " costs $").concat(this.price, ".");
    };
    return Product;
}());
// Electronics Class
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, price, warranty) {
        var _this = _super.call(this, name, price) || this;
        _this.warranty = warranty;
        return _this;
    }
    Electronics.prototype.getDetails = function () {
        return "".concat(this.name, " costs $").concat(this.getPrice(), " with ").concat(this.warranty, " years warranty.");
    };
    Electronics.prototype.applyDiscount = function (percent) {
        var discountAmount = (this.getPrice() * percent) / 100;
        this.setPrice(this.getPrice() - discountAmount);
    };
    return Electronics;
}(Product));
// Clothing Class
var Clothing = /** @class */ (function (_super) {
    __extends(Clothing, _super);
    function Clothing(name, price, size, material) {
        var _this = _super.call(this, name, price) || this;
        _this.size = size;
        _this.material = material;
        return _this;
    }
    Clothing.prototype.getDetails = function () {
        return "".concat(this.name, " costs $").concat(this.getPrice(), ", Size: ").concat(this.size, ", Material: ").concat(this.material, ".");
    };
    Clothing.prototype.applyDiscount = function (percent) {
        var discountAmount = (this.getPrice() * percent) / 100;
        this.setPrice(this.getPrice() - discountAmount);
    };
    return Clothing;
}(Product));
var laptop = new Electronics("MacBook Pro", 2000, 2);
console.log(laptop.getDetails());
laptop.applyDiscount(10);
console.log(laptop.getDetails());
var tshirt = new Clothing("Nike T-Shirt", 50, "M", "Cotton");
console.log(tshirt.getDetails());
tshirt.applyDiscount(20);
console.log(tshirt.getDetails());
