//Basic Element:
//You can use JSX to define elements, similar to how you would write HTML.

const element2 = <h1>Hello, JSX!</h1>;

//Embedding Expressions:
//You can embed JavaScript expressions within JSX using curly braces {}.
const name = "John";
const element1 = <p>Hello, {name}!</p>;

//Using JSX in Components:
//JSX is commonly used within React components. Here's a simple functional component:
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

//Conditional Rendering:
//You can use JavaScript's conditional statements within JSX.
const isLoggedIn = true;
const greeting = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;

//Mapping Arrays to JSX:
//You can map over arrays and generate JSX elements dynamically.
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);

//Styling with JSX:
//You can apply CSS styles using the style attribute.
const style = {
  backgroundColor: 'blue',
  color: 'white',
};

const element = <button style={style}>Click me</button>;

//Nesting Elements:
//JSX allows nesting elements just like HTML.
const container = (
  <div>
    <h2>Heading</h2>
    <p>Some text here.</p>
  </div>
);

//Self-Closing Tags:
//Like HTML, you can use self-closing tags for elements without children.
const image = <img src="image.jpg" alt="An image" />;
