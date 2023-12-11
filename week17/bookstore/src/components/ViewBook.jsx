import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ViewBook () {
    const location = useLocation();
    console.log(location)
    return(
        <h1>{location.state.id}</h1>
    )
}