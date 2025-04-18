const getStoredBook = () => {
    const storedBook = localStorage.getItem('readList');
    if (storedBook) {
        const parsedBook = JSON.parse(storedBook);
        return parsedBook;
    }
    return [];
}

const addToDB = id => {
    const parsedBook = getStoredBook();
    if (parsedBook.includes(id)) {
        alert('Book already in the list');
    } else {
        parsedBook.push(id);
        localStorage.setItem('readList', JSON.stringify(parsedBook));
    }
}

export { addToDB, getStoredBook };
