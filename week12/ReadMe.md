# Module 12: Introduction to React

In **Module 12: Introduction To React**, you’ll create a simple React component, which is the foundational building block of a web page built using React. You’ll use the ES6 features you practiced in the last module to write clean, concise code in JSX, the JavaScript syntax extension you will use for React. By the end of the React section, you’ll be able to track button clicks on basic React components.

At the end of this module, you will have the opportunity to go through optional exercises with ES6 syntax. These videos are designed for you to code along. These exercises are not required, but they will help build your confidence in ES6. You may also work on these exercises before you begin this module if you prefer.

## Framework and Library
Both the framework vs library is precoded support programs to develop complex software applications. However, libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application.

### Introduction to the React Library
React is a declarative and component-based JavaScript library.

* Declarative means that React updates the application interface when data changes. As an example of this declarative functionality, it is utilized when a user logs into their account and their name displays elsewhere on the screen.

* Component-based design is the concept of writing small bits of functionality that are reusable throughout an application. For example, a blog website may have a component for a post, which contains details about the user who created the post, the contents of the post, and any actions others can take to like, share, or comment on that post. The post component is a structure with a set of rules about the data it takes in and how it displays it. Each of these elements could be broken down into smaller and smaller components, which you will learn more about later in this module.

### Difference Between Frameworks and Libraries

Imagine you're building a custom car. A **library** is like a collection of tools you can use for specific tasks. For example, you might have tools for changing the tires, fixing the engine, or painting the car. You decide when and how to use each tool based on your car's unique needs. Libraries are like having a toolbox with specialized equipment.

Now, a **framework** is more like a set of blueprints and guidelines for building a specific type of car. It not only provides you with the tools but also tells you how to assemble them and where to put each part. It's like following a detailed instruction manual to build a sports car or a sedan. With a framework, you're building your car following a predetermined design, and you have less flexibility in changing the overall structure because it's based on the framework's plan.


## Node Version Manager
Install Node.js from [here](https://nodejs.org/en/download/package-manager)

## JSX Syntax
``````
const title = 'Hello World';

const element = <h1>{title}</h1>;
``````

## HTTPS Server

Install http-server using this command:
``````
npm install -g http-server
``````
Once we start using actual React application, we won't need this server.

## Props and Containers

In React, props (short for properties) and components are fundamental concepts for building user interfaces. They are core building blocks of React applications. Let's explore what each of these concepts means:

### Components:

Definition: In React, a component is a reusable, self-contained piece of code that represents a part of the user interface. Components can be thought of as building blocks for your application. They can represent things like buttons, forms, navigation bars, or more complex structures like entire pages or sections of a page.

### Props:
Definition: Props are a way to pass data from parent components to child components. They are essentially a set of parameters or attributes that you can give to a component when you use it. Props allow you to customize and configure how a component behaves and what it displays.

(![React Components and Props](https://bosctechlabs.com/wp-content/uploads/2022/06/React-Data-Flow.png))

In summary, components are like building blocks that you use to create the structure of your user interface, and props are the way you customize and pass data to these components. Together, they allow you to create dynamic and reusable user interfaces in React. Components encapsulate functionality and styling, while props allow you to make these components flexible and adaptable for different use cases.
