class Car {
  public brand: string;
  public readonly color: string;
  private engineOn: boolean = false;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
  }

  protected startEngine() {
    this.engineOn = true;
    console.log(`${this.brand} engine has started`);
  }
}

class SpeedCar extends Car {
  public boost() {
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
  name: string;
  height: number;
  complexion: string;

  constructor(name: string, height: number, complexion: string) {
    this.height = height;
    this.complexion = complexion;
    this.name = name;
  }

  sleep(): void {
    console.log(`${this.name} is  Sleeping`);
  }
}

const tade = new Person("Tade", 5.9, "Fair");
tade.sleep();

const williams = new Person("Williams", 4.5, "Dark");
williams.sleep();

class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Hi my name is ${this.name} and i am ${this.age} years old.`);
  }
}

const emma = new Student("Bolu", 34);
emma.introduce();

class Animal {
  name: string;
  skinType: string;

  constructor(name: string, skinType: string) {
    this.name = name;
    this.skinType = skinType;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const animal1 = new Animal("Dog", "Fur");
console.log(animal1);
animal1.makeSound();

class Dog extends Animal {
  breed: string;
  constructor(name: string, skinType: string, breed: string) {
    super(name, skinType);
    this.breed = breed;
  }

  makeSound(): void {
    console.log(`${this.name} is barking whoof!!!`);
  }
}

const dog1 = new Dog("Bingo", "Fur", "German Shephard");
console.log(dog1);
dog1.makeSound();

class Bird extends Animal {
  fly(): void {
    console.log(`${this.name} is Flying`);
  }
}

const eagle = new Bird("Eagle", "Feathers");

eagle.fly();

class User {
  public name: string;
  public role: string;
  email: string;
  constructor(name: string, role: string, email: string) {
    this.name = name;
    this.role = role;
    this.email = email;
  }

  static createGuest(role: string) {
    console.log(`This is a ${role} User`);
  }

  static validateEmail(email: string) {
    if (email.includes("@")) {
      console.log(`This is a valid email...`);
    } else {
      console.log("Error invalid Email...");
    }
  }
}

const john = new User("John Doe", "Guest", "john.doe@gmail.com");
const Timmy =  new User("Timmy", 'Guest', 'timmy.timgmail.com')

User.validateEmail(john.email);
User.validateEmail(Timmy.email)