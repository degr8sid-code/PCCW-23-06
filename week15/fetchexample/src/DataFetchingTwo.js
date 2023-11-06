// example to fetch only one item
import React, {useState, useEffect} from 'react'
import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts/id
export const DataFetchingTwo = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    // new state variable
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

const handleClick = ()  => {
    setIdFromButtonClick(id)
}

    useEffect(() => {
        //returns a promise
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then( res => {
            console.log(res)
            //set the response
            setPost(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    }, [idFromButtonClick])
// the empty array disables infinite fetching and the data is fetched only once
//now that the result depends on id, we'll specify tht in useEffect
    // renders the blog post

     // we'll add an input element before rendering
    return (
        
        <div>
            <input type='text' value={id} 
            onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch post</button>
            <div>{post.title}</div>
            {/* <ul>{posts.map( post => 
                <li key={post.id}>{post.title}</li>)}</ul> */}
        </div>
    )
}