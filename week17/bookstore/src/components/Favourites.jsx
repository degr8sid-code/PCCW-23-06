import React from 'react';
import { useAppContext } from './context/bookContext';

export default function Favourites () {
    
    console.log("Loading favourites list")
    const { favs, addToFavs, removeFromFavs} = useAppContext()
    console.log(favs)

    const favChecker = (id) => {
        const boolean = favs.some((book) => book.id === id)
        return boolean
    }

    return (
        <div className='container'>
            <h1>Favourites</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                    {favs.length > 0 ? favs.map((book) =>
                        <div className="card" style={{ width: 18 + 'rem' }} key={book.id}>
                            <img src={book.image_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                {favChecker(book.id) ?
                                    <a href="#" 
                                    className="btn btn-primary"
                                    onClick={() => removeFromFavs(book.id)}
                                    >Remove from Favourites</a> :
                                    <p> You don't have any favs! </p>
                                }
                        </div>
                        </div>
                    ) : <h2>You dont have any favs yet</h2>}
            </div>
        </div>
    )
}