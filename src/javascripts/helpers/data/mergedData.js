import {
  deleteAuthor,
  getSingleAuthor
} from './authorData';
import {
  deleteBook,
  getSingleBook,
  getAuthorBooks
} from './bookData';

const viewBookDetails = (bookFirebasekey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebasekey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

// const viewBookDetails = async (bookFirebaseKey) => {
//   const book = await getSingleBook(bookFirebaseKey);
//   const authorObject = await getSingleAuthor(book.author_id);
//   return { authorObject, ...bookObject };

const viewAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey)
    .then((AuthorObject) => {
      getAuthorBooks(AuthorObject.firebaseKey)
        .then((bookObject) => {
          resolve({ bookObject, ...AuthorObject });
        });
    }).catch(reject);
});
const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebasekey));
    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, viewAuthorDetails, deleteAuthorBooks };
