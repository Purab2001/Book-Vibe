import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import About from '../pages/About';
import BookDetails from '../pages/BookDetails';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                path: "/",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/book-details/:Id",
                Component: BookDetails,
            }
        ]
    },
]);