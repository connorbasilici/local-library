// Use find to match account.id with input.id 

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

// Use sort to order accounts by last name

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1
  )
}

function getTotalNumberOfBorrows(account, books) {

  // Set initial result value to 0 

  let totalNumberOfBorrows = 0; 

  // Create a loop for borrows nested in a loop for books. So, take the first book, and the first borrow in books[0].borrow. Check if that borrow has been returned. 
  // If not, add 1 to the result value, if so, add nothing and move on to the next borrow. Iterate through the rest of the borrows, then move on to the next book. 

  for (let i = 0; i < books.length; i++ ) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      account.id === books[i].borrows[j].id ? totalNumberOfBorrows +=1 : totalNumberOfBorrows +=0; 
      }
    }

  return totalNumberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {

  // Give a name to our result, and initialize it as an empty array 
  
  let booksPossessedByAccount = [];

  // Embed offer information in each book in books 

  books.forEach((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    book['author'] = author;
  })

  // Go through each book in books, and push any book which is not returned and matching the input account id to booksPossessedByAccount array

  books.forEach((book) => {
    if (book.borrows.find((borrow) => borrow.id === account.id && !borrow.returned)) {
      booksPossessedByAccount.push(book);
    }
  })

  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
