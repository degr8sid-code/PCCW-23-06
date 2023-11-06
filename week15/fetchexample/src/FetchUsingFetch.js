// create a form using useState, useEffect and fetch()
//page loads and fetches data
// it converts the data into json
// and displays the value using component

import React, {useState, useEffect} from 'react'
export const FetchUsingFetch = () => {

    const [email, setEmail] = useState('xyz@xyz.com')
    const [selectData, setSelectData] = useState([])
    const [selectValue, setSelectValue] = useState('')    
    

    //useEffect always run first
    useEffect ( () => {
        fetchData()
    }, [])
    
    //fetch function
    const fetchData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setSelectData(data))
        .catch(err => console.log(err))
    }

    const SelectDropDown = () => {
        return (
            <select value={selectValue}
            onChange={ (e) => setSelectValue(e.target.value)}>
                {selectData?.map( (item) => (
                    <option value={item.website}
                    key={item.website}>
                        {item.website}
                    </option>
                ))}
            </select>
        )
    }
    const handleSubmit = (e) => {
        //prevents refresh and handle the values
        e.preventDefault();
        console.log(email + ' ' + selectValue)
    }
    return (
        <div>
            <h1>Form</h1>
            {/* // usually form has submit and some submit URL */}
            {/* in react, we use onClick */}
            <form>
                <label>Email</label>
                <input type='text' id='email' name='email'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}></input>
{/* take the alue of target (form field) and set its value */}
<SelectDropDown />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}