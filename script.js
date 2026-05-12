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

addBookToLibrary("Certamente", "R. Bellantonio", "1520", true);

addBookToLibrary("Lello", "Solo Lello", "15", true);

console.log(myLibrary);

function showBooks(books){
    const table = document.getElementById("table-body");
    
    for(const book of books){
      const newRow = document.createElement("tr");
      console.log(book);
        newRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
    `;
    
    table.appendChild(newRow);
    }
}
showBooks(myLibrary);

//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
//console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
