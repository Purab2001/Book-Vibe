import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router';
import { getStoredBook } from '../utility/addToDB';

const ReadList = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [sort, setSort] = useState('');
    const navigate = useNavigate();

    const data = useLoaderData();

    useEffect(() => {
        const parsedBook = getStoredBook(); // Fetch books from local storage
        const convertedBook = parsedBook.map(id => parseInt(id));
        const filteredBook = data.filter(book => convertedBook.includes(book.bookId));
        setReadBooks(filteredBook);
    }, [data]);

    const handleSort = (type) => {
        setSort(type);
        if (type === 'pages') {
            const sortedBooks = [...readBooks].sort((a, b) => a.totalPages - b.totalPages);
            setReadBooks(sortedBooks);
        }
        if (type === 'ratings') {
            const sortedBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
            setReadBooks(sortedBooks);
        }
    };

    const handleRemove = (bookId) => {
        // Remove the book from the state
        const updatedBooks = readBooks.filter(book => book.bookId !== bookId);
        setReadBooks(updatedBooks);
    };

    const handleViewDetails = (bookId) => {
        navigate(`/book-details/${bookId}`); // Navigate to the BookDetails page
    };

    return (
        <div>
            <div className='text-center py-6 bg-[#F3F3F3] mb-6 rounded-2xl'>
                <h1 className='work-sans text-2xl font-bold'>Books : {readBooks.length}</h1>
            </div>
            <div className="flex justify-center mb-6">
                <div className="dropdown dropdown-start work-sans">
                    <div tabIndex={0} role="button" className="btn btn-success btn-lg shadow-none text-white m-1 text-center">Sort by {sort ? `: ${sort}` : ''}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                        <li><a onClick={() => handleSort('ratings')}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <Tabs className={'mb-6'}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    {readBooks.length > 0 ? (
                        <ul className="list-none">
                            {readBooks.map(book => (
                                <li key={book.bookId} className="mb-6 p-4 bg-[#F9F9F9] rounded-lg shadow-md">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="w-16 h-20 object-cover rounded-md"
                                        />
                                        <div>
                                            <h3 className="font-bold text-lg">{book.title}</h3>
                                            <p className="text-sm text-gray-600">Author: {book.author}</p>
                                            <p className="text-sm text-gray-600">Pages: {book.totalPages}</p>
                                            <p className="text-sm text-gray-600">Rating: {book.rating}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleRemove(book.bookId)}
                                            className="btn btn-outline btn-sm text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                                        >
                                            Remove
                                        </button>
                                        <button
                                            onClick={() => handleViewDetails(book.bookId)}
                                            className="btn btn-primary btn-sm text-white"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-500">No books read yet.</p>
                    )}
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;