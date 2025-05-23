"use strict";
class Car {
    constructor(brand, color) {
        this.engineOn = false;
        this.brand = brand;
        this.color = color;
    }
    startEngine() {
        this.engineOn = true;
        console.log(`${this.brand} engine has started`);
    }
}
class SpeedCar extends Car {
    boost() {
        return this.startEngine();
    }
}
const toyota = new Car("Toyota", "Red");
const audi = new Car("Audi", "Black");
toyota.brand = "Mercedez";
console.log(toyota);
const ferrari = new SpeedCar("Ferrari", "Silver");
ferrari.boost();
class Person {
    constructor(name, height, complexion) {
        this.height = height;
        this.complexion = complexion;
        this.name = name;
    }
    sleep() {
        console.log(`${this.name} is  Sleeping`);
    }
}
const tade = new Person("Tade", 5.9, "Fair");
tade.sleep();
const williams = new Person("Williams", 4.5, "Dark");
williams.sleep();
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi my name is ${this.name} and i am ${this.age} years old.`);
    }
}
const emma = new Student("Bolu", 34);
emma.introduce();
class Animal {
    constructor(name, skinType) {
        this.name = name;
        this.skinType = skinType;
    }
    makeSound() {
        console.log(`${this.name} is making a sound`);
    }
}
const animal1 = new Animal("Dog", "Fur");
console.log(animal1);
animal1.makeSound();
class Dog extends Animal {
    constructor(name, skinType, breed) {
        super(name, skinType);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} is barking whoof!!!`);
    }
}
const dog1 = new Dog("Bingo", "Fur", "German Shephard");
console.log(dog1);
dog1.makeSound();
class Bird extends Animal {
    fly() {
        console.log(`${this.name} is Flying`);
    }
}
const eagle = new Bird("Eagle", "Feathers");
eagle.fly();
class Userz {
    constructor(name, role, email) {
        this.name = name;
        this.role = role;
        this.email = email;
    }
    static createGuest(role) {
        console.log(`This is a ${role} User`);
    }
    static validateEmail(email) {
        if (email.includes("@")) {
            console.log(`This is a valid email...`);
        }
        else {
            console.log("Error invalid Email...");
        }
    }
}
const john = new Userz("John Doe", "Guest", "john.doe@gmail.com");
const Timmy = new Userz("Timmy", 'Guest', 'timmy.timgmail.com');
Userz.validateEmail(john.email);
Userz.validateEmail(Timmy.email);
