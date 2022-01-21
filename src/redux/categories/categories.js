/* eslint-disable no-unused-expressions */
const ADD = 'bookstore/categories/add';
const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
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

export const add = (category) => {
  ADD;
  category;
};
