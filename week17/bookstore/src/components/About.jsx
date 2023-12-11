import React from 'react';
import { useState, useEffect } from 'react';
// import fetch from 'node-fetch';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function About ()  {
    // const [books, setBooks] = useState(null);
    const books = useLoaderData()
    const navigate = useNavigate();
    //  const fetchData = () => {
    //      axios
    //      .get('https://example-data.draftbit.com/books?_limit=2')
    //      .then(res =>  setBooks(res.data))
    //      .then(console.log(books))
    //      .catch((err) => console.log(err))
    //  }
  
    // useEffect(fetchData, [])

   const handleClick = (id) => {
    console.log(id)
      navigate("/viewbook", {state: {id:id}})
    }
    return(
        <div className="flex-row">
            <h1 className="p-2">Books list</h1>
            <div className="d-flex flex row justify-content-around align-items-stretch">
            {books.map((book) => 
            <div className="card" style={{width: 18 + 'rem'}} key={book.id}>
            <img className="card-img-top" src={book.image_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <a href="#" className="btn btn-primary" onClick={handleClick(book.id)}>View Details</a>
            </div>
           </div>
          )}
          </div>
          </div>
    )
}

export const bookInfoLoader = async () => {
   const response = await fetch('https://example-data.draftbit.com/books?_limit=2');
   console.log(response);
   return response.json();
}