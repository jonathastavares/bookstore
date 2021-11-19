import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from '../forms/form';
import classes from './book.module.css';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

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
