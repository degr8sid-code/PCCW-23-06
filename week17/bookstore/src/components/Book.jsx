import React from 'react';
import { useParams } from 'react-router-dom';

export default function Book () {
    const {bookid} =  useParams();
    return(
        <div>Book: {bookid}</div>
    )
}