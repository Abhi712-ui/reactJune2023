# Components

## Functional Components

- Functional components are JavaScript functions that return JSX (or null). They are simpler and easier to understand than class components. Here's an example of a functional component:

```javascript

import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

```

## Class Components

- Class components are JavaScript classes that extend the `React.Component` class. They have additional features such as lifecycle methods and local state. Here's an example of a class component:

```javascript

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}


```

## Props

- Props (short for properties) are used to pass data from a parent component to its child components. They are immutable and help in creating reusable components. Props are passed as attributes to the component in JSX. Here's how you can use props:

```javascript

// Parent Component
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
}


```

```javascript

// Child Component (Greeting.js)
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

```

- In the above example, the parent component `(App)` passes the `name` prop with the value "John" to the child component `(Greeting)`. The child component receives the prop using the `props` argument and renders it.

## Default Props

- You can define default values for props using the `defaultProps` property. These values are used if a prop is not explicitly provided. Here's an example

```javascript

import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: 'Guest'
};

```

- In the above example, if the parent component does not provide a value for the name prop, the default value "Guest" will be used.

## Arrow Function Component

```javascript
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

```

- If the component's body consists of a single expression, you can use implicit return without the need for the `return` keyword.

```javascript
import React from 'react';

const Greeting = () => <h1>Hello, World!</h1>;
```

### `this` binding

- Regular functional components have their own `this` binding, which is determined by how the component is called or invoked. However, in most cases, the `this` value is not used in functional components.

- Arrow function components do not have their own `this` binding. Instead, they inherit the `this` value from the enclosing lexical scope. This means they can access the `this` value of the parent component or the surrounding scope.

### context binding

- Regular functional components can access the React context using the `useContext` hook or by wrapping the component in the `Context.Consumer` component.

- Arrow function components can also access the React context using the `useContext` hook or by leveraging the lexical scope to access the context value from the surrounding component.

### usage and considerations

- Regular functional components are more versatile and can be used in various scenarios. They can have their own state using hooks, define lifecycle methods using the `useEffect` hook, and participate in other advanced React features.

- Arrow function components are often preferred for simpler components or when concise syntax is desired. They are commonly used for presentational components that receive props and render UI elements.
