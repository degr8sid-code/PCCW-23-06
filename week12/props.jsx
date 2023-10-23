const Hello = (props) => {
    const name = props.name;
    return <h1>Hello {name}</h1>
    }
    
    ReactDOM.render(<Hello name="Francis"/>, document.getElementById("root"))