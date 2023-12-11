import React from 'react';
import { API_URL } from './APi';
import { useState, useEffect, useContext } from 'react';
// import fetch from 'node-fetch';
import axios from 'axios';
import { useAppContext } from './context/bookContext';

export default function Home ()  {
    const [books, setBooks] = useState(null);
    const {favs, addToFavs, removeFromFavs, addToCart} = useAppContext();
    // console.log("Favorites are" + favs)
    //console.log(theme);
    //  const fetchData = () => {
    //      axios
    //      .get(API_URL)
    //      .then(res =>  setBooks(res.data))
    //      .then(console.log(books))
    //      .catch((err) => console.log(err))
    //  }
  
    useEffect(() => {
        const func = async () => {
            try{
                const fetchData = await fetch(API_URL)
                console.log(fetchData)
                const jsonData = await fetchData.json()
                console.log(jsonData)
                setBooks(jsonData);
                console.log(books)
             } catch (err){console.log(err)}; //<== Add try...catch to avoid app crash and catch error!          
         }
     
         func();
    }, [])

    const favChecker = (id) => {
        const boolean = favs.some((book) => book.id === id)
        return boolean
    }

    return(
        <div className="container flex-row">
            <h1 className="p-2">Books list</h1>

            <div className="d-flex flex row justify-content-around align-items-stretch">
            {books?.map((book) => 
            <div className="card mb-3" style={{width: 18 + 'rem'}} key={book.id}>
            <img className="card-img-top" src={book.image_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <a href="#" className="btn btn-primary">View Details</a>

                {favChecker(book.id) ?
                <a href="#" 
                className="btn btn-primary"
                onClick={() => removeFromFavs(book.id)}
                >Remove from Favourites</a> :
                <a href="#" 
                className="btn btn-primary"
                onClick={() => addToFavs(book)}
                >Add to Favourites</a>
            }
            <a href="#" className="btn btn-primary"
            onClick={() => addToCart(book)}>Add to Cart</a>
            </div>
           </div>
          )}
          </div>
          </div>
    )
}