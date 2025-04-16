import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center py-20 px-28 bg-[#F3F3F3] rounded-3xl'>
            <div>
                <h1 className='text-5xl font-bold mb-9'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success text-white btn-lg'>View The List</button>
            </div>
            <div>
                <img className='w-[300px] h-[350px]' src="pngwing 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;