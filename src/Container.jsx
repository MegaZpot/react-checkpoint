import { useEffect } from "react";
import { useState } from "react";
import BookTable from "./BookTable";
import BookForm from "./BookForm";

export default function Container(){
    const [books,setBooks] =useState([])

    
    const getBooks = async() =>{
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        setBooks(data);        
    }

    const postBook = async(book) => {
        const response = await fetch('http://localhost:3000/books',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({book}),
   
    });
    const newBook = await response.json();
    setBooks((books) => [...books, newBook]);
    }
    
    useEffect(()=>{
        getBooks();
    },[])


    return(
        <div>
            <BookForm postBook={postBook}/>
            <BookTable books={books}/>
        </div>
    )
}