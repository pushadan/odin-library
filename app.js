class Library{
  constructor(){
    this.books = [];
  }
  //inherited methods
  createBook(){
    //capture new book properties
    const bookTitle = prompt("Please enter a book title");
    const author = prompt("Please enter the author");
    const pageNums = prompt("Please enter the amount of pages");

    //create book obj
    const newBook = new Book(bookTitle, author, pageNums);
    //add book to library
    newBook.addBookToLibrary(this);
  }
}

class Book{
  constructor(bookTitle, author, pageNums){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageNums = pageNums;

    //instance methods
    this.addBookToLibrary = function(obj){ 
      //push user created book to Library Array
      obj.books.push({"bookTitle": this.bookTitle,
                      "author": this.author,
                      "pageNums": this.pageNums});
      //add book to UI
      addBookToUI(this.bookTitle,this.author,this.pageNums);
    }

    //closure methods
    const addBookToUI = function(title,author,pgNums){
      //create elements
      const li = document.createElement('li');
      const divTitle = document.createElement('div');
      const divAuthor = document.createElement('div');
      const divPages = document.createElement('div');
      //assign content
      divTitle.textContent = title;
      divAuthor.textContent = author;
      divPages.textContent = `${pgNums} pages`;
      //assign class
      li.classList.add("bookCard");
      divTitle.classList.add("title");
      divAuthor.classList.add("author");
      divPages.classList.add("pages");
      //append together to make card
      li.appendChild(divTitle);
      li.appendChild(divAuthor);
      li.appendChild(divPages);
      //add card to booklist
      bookList_ul.appendChild(li);
    }

  }
}

//program start

//create new library object
const myLibrary = new Library;

//capture button, add event listener
const addBookButton = document.querySelector("#createBookButton");
const bookList_ul = document.querySelector(".bookList-ul");

//create book on click
addBookButton.addEventListener("click", ()=>{
  myLibrary.createBook();
});






