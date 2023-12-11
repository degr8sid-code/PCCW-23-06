import { useContext, createContext } from "react";
import { useState } from "react";
const AppContext = createContext (null);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === undefined)
    {
        throw new Error ("App context not found")
    }

    return context;
}

const AppContextProvider = ({children}) => {
    const [favs, setFavs] = useState([]);
    const [price, setPrice] = useState(0)
    const [booksInCart, setBooksInCart] = useState([]);

    const addToFavs = (book) => {
        const oldFavs = [...favs];
        const newFavs = oldFavs.concat(book);
        setFavs(newFavs);
    }

    const removeFromFavs = (id) => {
        const oldFavs = [...favs];
        const newFavs = oldFavs.filter((book) => book.id !== id);
        setFavs(newFavs);
    }

    const addToCart = (book) => {

        let isInCart = booksInCart.find(b => b.id === book.id);
        let newCart = [...booksInCart]
        if(!isInCart) {
            isInCart= {...book, quantity: 1};
            newCart.push(isInCart);
        }
        setBooksInCart(newCart);
        console.log(booksInCart);
    }

    return <AppContext.Provider
    value={{favs, addToFavs, removeFromFavs, addToCart}}>
        {children}
    </AppContext.Provider>
}


export default AppContextProvider;

