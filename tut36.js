class Library {
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};         // {} blank object create
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

        issueBook(bookname, user){
            this.issuedBooks[bookname] = user;     // yeh book es user ke pass hai
        }

        returnBook(bookname){
            delete this.issuedBooks[bookname];
         }
}