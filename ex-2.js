books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า

  //option 1 : for loop
  // let index = -1 ;
  // for(let i in books){
  //   if(books[i].title === searchTitle){
  //     index = i
  //   }
  // }
  // return index

  // option 2 : findIndex
  const index = books.findIndex((book)=>book.title == searchTitle)
  return index

}

console.log(findBookIndex(books,"Harry Potter"));