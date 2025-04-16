import React, { Suspense } from 'react';
import Book from './Book';


const Books = ({ data }) => {

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Books</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='grid grid-cols-3 gap-6'>
                    {data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)}
                </div>
            </Suspense>
        </div>
    );
};

export default Books;