const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "read" : "not read yet";
  //this.info = function(){
  // return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;
  // }
}

Book.prototype.info = function () {
  return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;

};
Book.prototype.toggleBook = function(){
  if(this.read === "read"){
    this.read = "not read yet";
  } else {
    this.read = "read";
  }

};


function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", false);

addBookToLibrary("Certamente", "R. Bellantonio", "1520", true);

addBookToLibrary("Lello", "Solo Lello", "15", true);

console.log(myLibrary);

function showBooks(books) {
  const table = document.getElementById("table-body");
  table.innerHTML = "";
  for (const book of books) {
    const newRow = document.createElement("tr");
    console.log(book);
    newRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td><button data-id="${book.id}" class="read-btn">
          Read? </button></td>
      <td><button data-id="${book.id}" class="remove-btn">
          Remove </button></td>
    `;

    table.appendChild(newRow);
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  if (title.trim() !== "" && author.trim() !== "" && pages.trim() !== "") {
    addBookToLibrary(title, author, pages, read);
    showBooks(myLibrary);
    form.reset();
  }


})

function removeBook(id) {
  const index = myLibrary.findIndex((element) => element.id === id);
  if (index > -1) {
    myLibrary.splice(index, 1);
    showBooks(myLibrary);
  }
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    removeBook(id);
  };
  if (event.target.classList.contains("read-btn")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const index = myLibrary.findIndex((element) => element.id === id);
    myLibrary[index].toggleBook();
    showBooks(myLibrary);
  };
}
);


showBooks(myLibrary);

//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
//console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
