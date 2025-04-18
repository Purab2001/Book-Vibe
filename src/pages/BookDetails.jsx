import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiStar } from "react-icons/ci";
import { addToDB } from '../utility/addToDB';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, author, rating, image, category, tags, totalPages, review, publisher, yearOfPublishing } = singleBook;

    const handleRead = id => {
        // Store with Id
        // Where to store (Local Storage)
        // Array or Collection
        // If Book is already in the array, then show a toast
        // If Book is not in the array, then add it to the array
        // Then show a toast
        toast("Wow so easy!");
        addToDB(id);
    }

    return (
        <div className='grid grid-cols-2 gap-12 justify-center items-center'>
            <div className='bg-[#F3F3F3] py-16 flex justify-center items-center rounded-2xl'>
                <img className='shadow-2xl h-[640px]' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold mb-4'>{bookName}</h1>
                <p className='work-sans font-medium text-xl opacity-80 mb-4'>By : {author}</p>
                <div className='border-b-3 border-[#F3F3F3] mb-4'></div>
                <p className='work-sans font-medium text-xl opacity-90 mb-4'>{category}</p>
                <div className='border-b-3 border-[#F3F3F3] mb-4'></div>
                <p className='work-sans text-base mb-4'><span className='font-bold'>Review:</span> <span className='opacity-70'>{review}</span></p>
                <div className="py-4 flex gap-2 flex-wrap"><span className='font-bold work-sans'>Tags:</span>
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-[#F3F3F3] px-3 py-1 rounded-full text-sm text-[#23BE0A] work-sans transition-all duration-300 hover:bg-[#23BE0A] hover:text-white">{tag}</span>
                    ))}
                </div>
                <div className='border-b-3 border-[#F3F3F3] my-4'></div>
                <div className='grid grid-cols-[150px_1fr] gap-y-4 gap-x-10 work-sans text-base mb-4'>
                    <span className='opacity-70'>Number of Pages:</span>
                    <span className='font-semibold'>{totalPages}</span>
                    <span className='opacity-70'>Publisher:</span>
                    <span className='font-semibold'>{publisher}</span>
                    <span className='opacity-70'>Year of Publishing:</span>
                    <span className='font-semibold'>{yearOfPublishing}</span>
                    <span className='opacity-70'>Rating:</span>
                    <span className='font-semibold flex items-center gap-1'>{rating} <CiStar size={18} /></span>
                </div>
                <ToastContainer />
                <button onClick={() => handleRead(id)} className='btn btn-outline mr-4 mt-4'>Read</button>
                <button className='btn btn-accent text-white mt-4 shadow-none'>Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;