import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F3F3]">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
                <div className="mb-6">
                    <img
                        src="book.ico"
                        alt="Book Icon"
                        className="w-24 h-24 mx-auto mb-4"
                    />
                    <h1 className="text-6xl font-bold text-[#23BE0A] mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        Oops! The page you're looking for seems to have been misplaced in our library.
                    </p>
                </div>
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="btn btn-success text-white w-full"
                    >
                        Back to Home
                    </Link>
                    <p className="text-sm text-gray-500">
                        Or try searching for what you're looking for
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;