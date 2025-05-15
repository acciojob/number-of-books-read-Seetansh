const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true
  },
  {
    title: "Mockingjay",
    author: "Suzanne Collins",
    readingStatus: false
  }
];

function numberOfBooksRead() {
  return library.filter(book => book.readingStatus).length;
}
console.log(numberOfBooksRead());