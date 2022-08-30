// Total books count is books.length 

function getTotalBooksCount(books) {
  return books.length; 
}

// Total accounts count is accounts.length

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {

  // Reduce to an object with name: and book.borrows[0].returned

  books.reduce((result, book) => {
    result[book.title] = book.borrows[0].returned
    return result;
  })

  let borrowedCount = 0; 

  for (let i = 0; i < books.length; i++ ) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      books[i].borrows[j].returned === true ? borrowedCount +=0 : borrowedCount +=1; 
      }
    }

    return borrowedCount;
}

function getMostCommonGenres(books) {
  
  // Initialize 2 empty variables: (1) an object for count of genre occurrences, and (2) the final result array which will be returned at the end of the method

  let countOfGenres = {};
  let result = [];

  // Iterate through each book in books. If an entry for the genre does not yet exist in countOfGenres, create it and set its value to 1.
  // If an entry for the genre already exists, just increment the value

  books.forEach((book) => { countOfGenres[book.genre] != null ? countOfGenres[book.genre]++ : countOfGenres[book.genre] = 1; });

  // Populate the result array with an object for each genre in countOfGenres, where the name is set to the countOfGenres element key, and the count is set to the countOfGenres element value
  
  for (const [key, value] of Object.entries(countOfGenres)) {
    result.push({
      'name' : key,
      'count' : value
    }); 
  }

  // Return the result array after sorting in descending order by count, and truncating it to take the top 5 values

  return result.sort((genreA, genreB) => genreB.count - genreA.count).slice(0,5);
}

function getMostPopularBooks(books) {

  // Initialize 2 empty variables: (1) an object for count of genre occurrences, and (2) the final result array which will be returned at the end of the method

  let countOfBorrows = {};
  let result = [];

  // Iterate through each book in books. Set the book title as key, and count of book borrows as the value for each entry in countOfBorrows object. 

  books.forEach((book) => { countOfBorrows[book.title] = book.borrows.length});

  // Populate the result array with an object for each book, where name is sent to the countOfBorrows element key and the count is set to the countOfBorrows element value. 

  for (const [key, value] of Object.entries(countOfBorrows)) {
    result.push({
      'name' : key,
      'count' : value
    }); 
  }

  // Sort the results in descending order by count, and truncate to return only the first 5 entries 

  return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0,5);
}

function getMostPopularAuthors(books, authors) {

  // Initialize an empty array for the result. 

  let result = [];

  // First iterate through the authors array, and add a new element called authorBorrows to each author. The authorBorrows element is an object with {name: "FirstName LastName", count: 0}.
  // Set name to be authors first name and last name, and set count to be 0 for each author. Then, iterate through the books array, and add the total number of borrows for the each book's author
  // to the count parameter of the authorBorrows object in the authors array. Once all the counts are added, then push the results to the result array. 

  authors.forEach((author) => {
   let authorBorrows = {name: `${author.name.first} ${author.name.last}`, count: 0};
   books.forEach((book) => { book.authorId === author.id ? authorBorrows.count += book.borrows.length :  authorBorrows.count += 0;});
   result.push(authorBorrows);
  });
  
  // Sort the results in descending order by count, and truncate to return only the first 5 entries 
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
