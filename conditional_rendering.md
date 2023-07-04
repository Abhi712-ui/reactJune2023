# Conditional Rendering

- Conditional rendering in React allows you to conditionally display components, elements, or content based on certain conditions or state values. It enables you to dynamically adjust what gets rendered to the DOM based on the current state of your application.

## if/else Statements

- You can use regular JavaScript if/else statements to conditionally render components or content in React.
- Conditionally render different JSX based on the outcome of the condition.

   ```jsx
   render() {
     if (condition) {
       return <ComponentA />;
     } else {
       return <ComponentB />;
     }
   }
   ```

## Element Variables

- You can assign JSX elements to variables and conditionally render those variables.
- This approach can make the code more readable and allows for more complex conditional rendering logic.

   ```jsx
   render() {
     let element;
     if (condition) {
       element = <ComponentA />;
     } else {
       element = <ComponentB />;
     }
     return <div>{element}</div>;
   }
   ```

## Ternary Operator

- The ternary operator (`condition ? true : false`) provides a concise way to conditionally render JSX in a single line.

   ```jsx
   render() {
     return (
       <div>
         {condition ? <ComponentA /> : <ComponentB />}
       </div>
     );
   }
   ```

## Short-Circuit Evaluation

- Using logical && operator, you can conditionally render components based on a condition.
- If the condition is true, the component is rendered. If false, nothing is rendered (or you can provide a default value).

   ```jsx
   render() {
     return (
       <div>
         {condition && <ComponentA />}
       </div>
     );
   }
   ```

## Using Variables or State

- Conditional rendering can also be based on variables or state values stored in the component.
- Update the state or variable based on certain conditions, and React will automatically re-render the component accordingly.

   ```jsx
   render() {
     const isLoggedIn = this.state.isLoggedIn;
     return (
       <div>
         {isLoggedIn ? <UserComponent /> : <LoginComponent />}
       </div>
     );
   }
   ```

## Conditional Rendering with Lists

- You can conditionally render components within a list by mapping over an array and filtering based on a condition.

   ```jsx
   render() {
     const users = this.state.users;
     return (
       <div>
         {users.map(user => {
           return user.isAdmin ? <AdminComponent user={user} /> : null;
         })}
       </div>
     );
   }
   ```
