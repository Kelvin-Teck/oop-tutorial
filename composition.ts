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
  books: string[];
  availableBooks: string[];

  constructor(books: string[]) {
    this.books = books;
    this.availableBooks = [...books];
  }

  borrow(name: string): string {
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
  name: string;
  isAvailable: boolean;

  constructor(name: string, isAvailable: boolean) {
    this.name = name;
    this.isAvailable = isAvailable;
  }
}

class Libz {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

    borrow(name: string): string {
        this.books.forEach((book: Book) => {
            if (book.name == name) {
                if (book.isAvailable) {
                    return name;
                }
            }
        })


        console.log("Sorry not found")
        return "";
    }
}

const book1 = new Book("To Kill a Mockingbird", true);
const book2 = new Book("1984", true);
const book3 = new Book("The Great Gatsby", true);
const book4 = new Book("Moby Dick", true);

const lib2 = new Libz([book1, book2, book3, book4]);
console.log(lib2);
