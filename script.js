const myLibrary = [];

function Book(title,author,pages, read){
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read? "read":"not read yet";
  //this.info = function(){
   // return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;
 // }
}

Book.prototype.info = function () {
    return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;

};

function addBookToLibrary(title,author,pages, read) {
  // take params, create a book then store it in the array
  let book = new Book(title,author,pages, read);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);
console.log(myLibrary);

//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
//console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
