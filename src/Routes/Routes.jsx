import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import About from '../pages/About';
import BookDetails from '../pages/BookDetails';
import ReadList from '../pages/ReadList';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                loader: () => fetch('/booksData.json'),
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/read-list",
                loader: () => fetch('/booksData.json'),
                Component: ReadList,
            },
            {
                path: "/book-details/:id",
                loader: () => fetch('/booksData.json'),
                Component: BookDetails,
            }
        ]
    },
]);