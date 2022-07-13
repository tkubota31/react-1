### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  A front-end framework. It is easy to make reusable components which make it easier to build modular applications.

- What is Babel?
    Babel is a javascript compiler to convert ECMASCRIPT 2015 into a version compatible in Javascript.

- What is JSX?
    JSX is JavaScript Syntax Extension. Is it a syntax for combining JavaScript and HTML. It is similar to writing HTML code insisde JavaScript code. It is a template language that comes with the tools of JavaScript

- How is a Component created in React?

    Components are created in React by defining a function and returning JSX.

- What are some difference between state and props?
    Props are data that is passed into a component and is immutable. A component cannot change its own props. Can pass in down to children. State cannot.

    States are data specific to a component and can change. WHen states are changes, the component is re-rendered.

- What does "downward data flow" refer to in React?
    This means that data is transferred between items in only one way. Parent components pass data down to their children via props.


- What is a controlled component?
    Form data is stored in the component's state and updated through change handlers.

- What is an uncontrolled component?
    React is not aware of the state change.

- What is the purpose of the `key` prop when rendering a list of components?
  Lets react find which components are changes to decide which ones to re-render.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  An array index for a key can be changed if the array is changed. The key should be unique to the prop and not change.

- Describe useEffect.  What use cases is it used for in React components?
    This functions runs after the first render, and if there is a second argument, it will run everytime the variable changes.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  Returns a mutable object with a key of current whose value is equal to the initial value passed into the hook. This objects persists across renders and a change do this value does not cause a rerender.

- When would you use a ref? When wouldn't you use one?
  You would use a ref when accesssing the DOM, or setting up/clearing timers.

- What is a custom hook in React? When would you want to write one?
  customs hooks are reusable functions that start with "use". Thes are functions that uses built in hooks. You would make one to generate own JSX, handle repeated tasks.
