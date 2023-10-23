const Hello = () => {
const name = 'Fred';
return (<h1>Hello {name}</h1>);
}
// Render the component into the 'root' element
ReactDOM.render(<Hello />, document.getElementById('root'));