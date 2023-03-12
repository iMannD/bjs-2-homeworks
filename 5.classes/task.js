class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(state) {
        if (this.state < 0) {
            this._state = 0;
        } else if (this.state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }   
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}
 
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        this.author = author;
    }
}
class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}


class Library {
    constructor (name, books) {
        this.name = name;
        books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            books.push(book);
        } 
    }
    findBookby (type, value) {
        let bookFound;
        for (let i = 0, i < books.length, i++) {
            
        }
    
    }
}