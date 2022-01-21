import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import Form from '../forms/form';
import { getBooks } from '../../redux/books/books';
import classes from './book.module.css';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingBooks = async () => {
      await dispatch(getBooks());
    };
    loadingBooks();
  }, []);
  return (
    <div className={classes.container}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}

      <Form className={classes.formSection} id="add-input" labelContent="ADD NEW BOOK" />
    </div>
  );
};

export default Books;
