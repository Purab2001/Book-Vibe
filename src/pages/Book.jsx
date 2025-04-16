import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const { bookId, bookName, author, rating, image, category, tags } = singleBook;
    return (
        <Link to={`/book-details/${bookId}`}>
            <div className="border border-[#F3F3F3] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                <figure className='py-6 bg-[#F3F3F3] flex justify-center rounded-xl transition-all duration-300 hover:bg-[#e8e8e8]'>
                    <img
                        className='h-[166px] shadow-2xl transition-all duration-300 hover:scale-105'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="py-4 flex gap-2 flex-wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-[#F3F3F3] px-3 py-1 rounded-full text-sm text-[#23BE0A] work-sans transition-all duration-300 hover:bg-[#23BE0A] hover:text-white">{tag}</span>
                    ))}
                </div>
                <div>
                    <h2 className="card-title text-xl transition-all duration-300 hover:text-[#23BE0A]">
                        {bookName}
                    </h2>
                    <p className='work-sans text-base py-4 transition-all duration-300 hover:text-[#23BE0A]'>By : {author}</p>
                    <div className='border-b-2 border-dashed border-[#F3F3F3] my-1'></div>
                    <div className="card-actions justify-between work-sans text-sm pt-4">
                        <span className="transition-all duration-300 hover:text-[#23BE0A]">{category}</span>
                        <span className='flex items-center gap-1 transition-all duration-300 hover:text-[#23BE0A]'>{rating} <CiStar size={18} /></span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;