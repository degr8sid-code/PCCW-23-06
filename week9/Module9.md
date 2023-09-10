# Module 9
## Asynchronous Code

In Module 9: Asynchronous Code, you’ll learn how to fetch data from multiple sources without making the user wait for each item to load step by step. Key tools such as promises, async, and await will help you write code for the modern browser and modern user. You’ll practice working with data in an asynchronous environment by completing several map exercises at the end of the module.

### Course Learning Outcomes Addressed
* Explain the key web programming concepts
* Build web applications using JavaScript, HTML, and CSS
* Design and code user interactions on web pages
* Design and implement UI components for web applications 

## What is Asynchronous Code
![Difference Between Sync and Async in JS](https://www.scaler.com/topics/images/synchronous-vs-asynchronous-javascript-thumbnail.webp)

Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

* Making HTTP requests using fetch()
* Accessing a user's camera or microphone using getUserMedia()
* Asking a user to select files using showOpenFilePicker()

So even though you may not have to implement your own asynchronous functions very often, you are very likely to need to use them correctly.

### Synchronous Programming
Code
```
// Define three functions
function firstTask() {
  console.log("Task 1");
}

function secondTask() {
  console.log("Task 2");
}

function thirdTask() {
console.log("Task 3");  
}

// Execute the functions
firstTask();
secondTask();
thirdTask();
```
Output:
``
"Task 1"
"Task 2"
"Task 3"
``
### Asynchronous Code
Code:
``
function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();
console.log(result);

console.log('...Finishing');
``

## Promises
* Here's a look at the graphical view of promises in JS:
![What is a Promise](https://www.alexlintu.com/content/images/2021/04/Group-74.png)
* Check `Promise.js` for the code.

### Promise Terminology

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

* pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
* fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
* rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, fetch() considers a request successful if the server returned an error like 404 Not Found, but not if a network error prevented the request being sent.

Sometimes, we use the term settled to cover both fulfilled and rejected.

A promise is resolved if it is settled, or if it has been "locked in" to follow the state of another promise.

## Async and Await
Asynchronous code can become difficult to follow when it has a lot of things going on. async and await are two keywords that can help make asynchronous read more like synchronous code. This can help code look cleaner while keeping the benefits of asynchronous code.

### The async Keyword
The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function. This is required to use await inside any function. When a function is declared with async, it automatically returns a promise; returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.

An important thing to understand is async functions are just syntactical sugar for promises.

### The await Keyword
await is pretty simple: it tells JavaScript to wait for an asynchronous action to finish before continuing the function. It’s like a ‘pause until done’ keyword. The await keyword is used to get a value from a function where you would normally use .then(). Instead of calling .then() after the asynchronous function, you would simply assign a variable to the result using await. Then you can use the result in your code as you would in your synchronous code.

## Final Look
![Comparing Callbacks, Promises and Async Await](https://www.johnpapa.net/content/images/2020/02/async-ts-1.png)

### References
* [Asynchronous Programming in JavaScript – Guide for Beginners](https://www.
freecodecamp.org/news/asynchronous-programming-in-javascript/)
* [How to Learn JavaScript Promises and Async/Await in 20 Minutes](https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/)