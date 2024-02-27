const myLibrary = ["the Lord of the Rings", "Danny's Book"];

const addBookButton = document.querySelector("#createBookButton");
addBookButton.addEventListener("click", ()=>{
  createBook();
});


class Book{
  constructor(bookTitle, author, pageNums){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageNums = pageNums;
  }

  //methods
  addBookToLibrary(){ 
    myLibrary.push({"bookTitle": this.bookTitle,
                    "author": this.author,
                    "pageNums": this.pageNums
    });
  }
  
}

function createBook(bookTitle, author, pageNums){
  bookTitle = prompt("Please enter a book title");
  author = prompt("Please enter the author");
  pageNums = prompt("Please enter the amount of pages");

  newBook = new Book(bookTitle, author, pageNums);

  console.log(newBook);
}


function displayAllBooks(){
}

