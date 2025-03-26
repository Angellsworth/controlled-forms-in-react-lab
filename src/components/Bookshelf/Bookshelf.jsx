// src/components/Bookshelf/Bookshelf.jsx
import { useState } from 'react';

const Bookshelf = () => {
  // this is where we store all the books on the shelf — starts with two already there
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // this keeps track of what the user is typing into the form fields
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  // every time a user types in an input, we update newBook
  const handleInputChange = (event) => {
    // grabbing the name "title" or "author" and the value from the input
    const { name, value } = event.target;
    // update just that one property in newBook, keeping the other one as is
    setNewBook({ ...newBook, [name]: value });
  };

  // when the form is submitted, this function runs
  const handleSubmit = (event) => {
    // stopping the page from reloading
    event.preventDefault();
    // add the new book to the bookshelf list
    setBooks([...books, newBook]);
    // clear the form so it’s ready for the next book
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* this form handles both of the inputs and the submit button */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />

          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {/* loops (map) through the books and display each one as a card */}
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;