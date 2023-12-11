import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import Home from './components/Home';
import About, { bookInfoLoader } from './components/About';
import Book from './components/Book';
import ViewBook from './components/ViewBook';
import Favourites from './components/Favourites';
import Cart from './components/Cart';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route 
        loader={bookInfoLoader}
        path='about' 
        element={<About />} />
      <Route path='book/:bookid' element={<Book />} />
      <Route path='/viewbook' element={<ViewBook />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
