'use client'

import React from 'react'

interface Book {
  id: number;
  title: string;
}

interface BooksGridProps {
  books: Book[];
  onBookClick: (id: number) => void;
}

const BooksGrid: React.FC<BooksGridProps> = ({ books, onBookClick }) => (
  <div className="my-10 w-full">
    <h2 className="text-xl font-bold">Existing Books</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {books.map((book) => (
        <button
          type="button"
          key={book.id}
          className="border p-2 rounded-lg hover:bg-gray-300 hover:text-black"
          onClick={() => onBookClick(book.id)}
        >
          <p className="font-semibold">
            ID:
            {' '}
            {book.id}
          </p>
          <p>{book.title}</p>
        </button>
      ))}
    </div>
  </div>
)

export default BooksGrid
