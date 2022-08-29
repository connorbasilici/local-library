// Use find to match author.id with input id

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

// Use find to match book.id with input id 

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {

  // Initialize 2 arrays, one for borrowed books, and one for books which haven't been borrowed 

  let borrowedStatusFalse = []; 
  let borrowedStatusTrue = [];

  // I noticed in the sample data that any borrow which has not been returned is in the 0 element of the borrows array. Here we iterate through each book in the books array. 
  // Use the helper function to check only the first element of a book's borrows (borrows[0]), and see whether returned is true or false. 
  // If true, push to borrowedStatusFalse - if false, push to borrowedStatusTrue. 

  books.forEach((book) => {
    getBorrowedStatus(book) ? borrowedStatusTrue.push(book) : borrowedStatusFalse.push(book);
  })
  // Finally, we return an array made out of the two arrays defined above.

  return [borrowedStatusTrue, borrowedStatusFalse];
}

function getBorrowersForBook(book, accounts) {

  // Create an empty array, which will contain the result; 

  let borrowers = [];

  const borrows = book.borrows; 

  // Go through accounts, and push all the account objects to our borrowers array where the account id matches the borrow ids. Also,
  // Also, add borrows.returned to each borrower object. 

  borrows.forEach((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    account['returned'] = borrow.returned;
    borrowers.push(account);
  })

  // Truncate the array to include only 10 results and return it

  return borrowers.slice(0,10); 

}

function getBorrowedStatus(book) {
  return !book.borrows[0].returned; 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
