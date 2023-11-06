import React, {useState, useEffect} from 'react'
import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts
export const DataFetching = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //returns a promise
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res)
            //set the response
            setPosts(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    }, [])
// the empty array disables infinite fetching and the data is fetched only once
    // renders the blog post

   
    return (
        <div>
            <ul>{posts.map( post => 
                <li key={post.id}>{post.title}</li>)}</ul>
        </div>
    )
}