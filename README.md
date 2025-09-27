## What is JSX, and why is it used?

    JSX (JavaScript XML) is a syntax extension for JavaScript used in React to build user interfaces. It looks like HTML but is converted into JavaScript functions like React.createElement. JSX makes code more readable and allows mixing UI with JavaScript logic. You can embed expressions using {}, such as <h1>Hello, {name}</h1>. Unlike HTML, it uses camelCase attributes like className and onClick. Every JSX expression must return a single parent element, often wrapped in a <div> or fragment. In short, JSX combines the simplicity of HTML with the power of JavaScript in React.
    JSX is used in React to make building user interfaces easier and more readable. Instead of writing complex JavaScript functions to create elements, JSX lets developers write HTML-like code directly in JavaScript. It allows dynamic content using {} for expressions, simplifies component structure, and helps React efficiently render and update the UI.

## What is the difference between State and Props?

    State is internal and mutable, meaning it belongs to a component and can change over time, usually in response to user actions or events. When state changes, the component re-renders automatically to reflect the new data. For example, a counter component stores its current count in state and updates it when a button is clicked.

    Props are external and immutable, meaning they are passed from a parent component to a child component. Props allow data to flow downward and help make components reusable. A child component cannot change props — it can only use them to render content.

    state = internal, changeable
    props = external, read-only.

## What is the useState hook, and how does it work?

    The 'useState hook' in React lets functional components have state, enabling them to store and manage data that can change over time. You use it by writing const [value, setValue] = useState(initialValue), where value is the current state and setValue updates it. When the state changes, React automatically re-renders the component to reflect the new value. For example, a counter component can initialize count to 0 and increment it on a button click.useState can store numbers, strings, objects, or arrays, making functional components dynamic and interactive without using classes.
    example:
    import { useState } from "react";

    function Counter() {
    const [count, setCount] = useState(0); // 0 is the initial state

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    }

## How can you share state between components in React?

    In React, state is local to a component, but sometimes  need to share it between components. There are several ways to do this:
    - Lifting State Up: Move the shared state to the closest common parent of the components that need it. The parent manages the state and passes it down as props. Children can trigger updates via functions passed from the parent.
    - Context API: React’s createContext allows you to create a global-like state accessible by any component in the tree without passing props manually at every level.
    - State Management Libraries: Tools like Redux, Zustand, or Recoil let manage state globally across components, which is useful for large applications.

## How is event handling done in React?

    In React, event handling is the way components respond to user actions such as clicks, typing, or form submissions. Unlike traditional HTML, where events are handled with inline strings like onclick="...", React uses camelCase event names and passes functions to handle them. This approach ensures that the this context is correctly bound, and events are handled in a declarative and organized way. React also uses a synthetic event system, which wraps native events to provide cross-browser consistency and better performance. This means you don’t need to worry about differences between browsers, and you can manage events efficiently in your components.
    example :
    const handleClick = () => alert('Clicked!');
    <button onClick={handleClick}>Click Me</button>
