// src/components/Bookshelf/Bookshelf.jsx
import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
      
      const [newBook, setNewBook] = useState({
        title: '',
        author: '',
      });

      const handleInputChange = (event) => {
        // the title/author is going to be the "name" with a "value" we are targeting THIS for our EVENT
        const { name, value } = event.target
        //set and update the new books title and/or author
        setNewBook({...newBook, [name]: value })
    }

    const handleSubmit = (event) => {
        //we prevent the default refresh
        event.preventDefault();
        //add/update the book
        setBooks([...books, newBook])
        //reset the form back to empty
        setNewBook({ title: '', author: '' })
    }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* when the submit button is pushed, we submit the ENTIRE form */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
                id='title'
                name='title'
                value={newBook.title}
                onChange={handleInputChange}
            />
            <label htmlFor="author">Author:</label>
            <input 
                id='author'
                name='author'
                value={newBook.author}
                onChange={handleInputChange}
            />
            <button type='submit'>Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
            <div key={index} className='bookCard'>
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;