"use strict";
// class GLE {
//     engine: Engine;
//     doors: Door[];
//     seats: Seat[]
// }
// const gle = new GLE();
// gle.engine.model
// class Engine {
//     model: string
// }
// class Door {
// }
// class Seat {
// }
class Lib {
    constructor(books) {
        this.books = books;
        this.availableBooks = [...books];
    }
    borrow(name) {
        if (this.availableBooks.includes(name)) {
            const idx = this.availableBooks.indexOf(name);
            this.availableBooks.splice(idx, 1);
            return name;
        }
        // console.log("SOrry not avaialable");
        return "";
    }
}
const bookz = ["A", "B", "C"];
const library = new Lib(bookz);
library.borrow("A");
library.borrow("A");
// console.log(library);
// console.log(bookz);
class User {
    borrow() {
        console.log("borrrows books and returns.");
    }
}
class Book {
    constructor(name, noInStock) {
        this.name = name;
        this.noInStock = noInStock;
    }
}
class Member {
    constructor(name) {
        this.borrowedBooks = [];
        this.name = name;
    }
    borrowBook(book) {
        if (!this.borrowedBooks.includes(book)) {
            if (book.noInStock > 0) {
                this.borrowedBooks.push(book);
                book.noInStock--;
            }
            console.log(`${book.name} borrowed by ${this.name}`);
        }
    }
}
class Libz {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showAvailableBooks() {
        // this.books.forEach((book) => {
        //   if (book.isAvailable) {
        //     console.log(book);
        //   }
        // });
    }
}
const book1 = new Book("To Kill a Mockingbird", 5);
const book2 = new Book("1984", 9);
const book3 = new Book("The Great Gatsby", 6);
const book4 = new Book("Moby Dick", 10);
const lib2 = new Libz();
lib2.addBook(book1);
lib2.addBook(book2);
// lib2.showAvailableBooks()
const dayo = new Member("Dayo");
dayo.borrowBook(book1);
dayo.borrowBook(book1);
const jane = new Member("Jane");
jane.borrowBook(book1);
// console.log(dayo.borrowedBooks);
