// BookList.js
class BookList {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (!book || typeof book !== 'string') {
            throw new Error('Invalid input');
        }
        if (this.books.includes(book)) {
            throw new Error('Book already exists');
        }
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index === -1) {
            throw new Error('Book not found');
        }
        this.books.splice(index, 1);
    }

    updateBook(originalBook, newBook) {
        const index = this.books.indexOf(originalBook);
        if (index === -1) {
            throw new Error('Book not found');
        }
        if (this.books.includes(newBook)) {
            throw new Error('New name already exists');
        }
        this.books[index] = newBook;
    }

    // getBookList() {
    //     return this.books.join('\n');
    // }
    async getBookList(list, index, callback) {
        if (index < list.length) {
            await callback(`${list[index]}\n`);
            await this.getBookList(list, index + 1, callback);
        } else {
            callback("");
        }
    }


    async saveToDatabase() {
        const result = {};
        const saveItemOnDatabase = (name, callback) => {
            const startTime = Date.now();
            const delay = Math.floor(Math.random() * name.length);
            setTimeout(() => {
                result[name] = Date.now() - startTime;
                callback();
            }, delay);
        };

        const promises = this.books.map(book => {
            return new Promise(resolve => {
                saveItemOnDatabase(book, resolve);
            });
        });

        await Promise.all(promises);
        return result;
    }

}

const library = new BookList();
Object.freeze(library);

module.exports = library;
