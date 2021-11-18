/* eslint-disable no-unused-expressions */
const ADD = 'bookstore/books/add';
const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state.books,
        action.book,
      ];

    default:
      return state;
  }
};

export const add = (book) => {
  ADD;
  book;
};
