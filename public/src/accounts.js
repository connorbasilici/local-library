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

  // Loop through each book in book, and use reduce to accumulate the total number of borrows each time a borrow in the book has a borrow.id which is matching the input account.id

  books.forEach(book =>
    { let result = book.borrows.reduce((total,borrow) =>
      { if(account.id === borrow.id) {total ++;} return total },0); 
      totalNumberOfBorrows += result; })

  return totalNumberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {

  // Embed offer information in each book in books 

  books.forEach((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    book['author'] = author;
  })


  // Return books filtered for books which meet two conditions checked by some:
  // (1) that there exists a borrow where borrow.id is matching input account.id, and (2) that the borrow matching the account has not been returned

  return books.filter((book) => { return book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned); });

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
