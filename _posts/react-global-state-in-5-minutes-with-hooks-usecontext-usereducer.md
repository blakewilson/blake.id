---
title: "React Global State in 5 Minutes with Hooks (useContext, useReducer)"
date: "2020-01-21T15:00:00-0700"
description: ""
---

React is fantastic for state management. UI & UX can be exponentially improved in terms of design and functionality thanks to React. With hooks, creating state local to components becomes even easier using `useState`. However, there are times when you need global state throughout your React app where Higher Order Components (HOC) just won't cut it.

## TL;DR

[Download the example repo on GitHub for the full source code and documentation!](https://github.com/blakewilson/react-global-state)

## Getting Started

Logically, the next thing to do is go install Redux. But Redux is so heavy, and there is so much setup involved. It's honestly exhausting.

Why not just use React for global state management? With React Hooks, now you can.

There are two main components when setting up global state in React, the first, is the store, and second is the reducers.

In this example, we'll be creating a simple todos app, where the todos will be stored in a global state context. [You can view the entire example on GitHub.](https://github.com/blakewilson/react-global-state)

## Step 1 –– Creating the Store

Let's start by setting up our global store, create a file called `store.js` and populate it with the following code:

```js
import React, {createContext, useReducer} from 'react'
import Reducer from './reducer'

const initialState = {
    todos: [],
    todoInput: ''
}

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store
```

We are doing a few things in this file. First, we set the `initialState`, pretty self explanatory. We are creating and exporting a `<Store>` component, this will be used in the next step. Finally, we are creating and exporting the `Context` variable. This will be used to get the global state in our components.

## Step 2 –– Add the `<Store>` Component to `ReactDOM.render()`

In the last example, we created a `<Store>` component. This component wraps around the entire application to make the global state available to all components within the application. Go to your React entrypoint file, where the `ReactDOM.render()` function is being called. It should look something like this:

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

Simply import `Store`, and wrap the `<Store>` component around the `<App>` component:

```js
import Store from './store'
...
ReactDOM.render(<Store><App /></Store>, document.getElementById('root'));
```

This allows the global state to be consumed by the entire application.

## Step 3 –– Create the Reducers

Next, we need to create our `reducer.js` file. If you are unfamiliar with what a reducer is, think of it as a function that determines what changes in your application's global state. Add the following code to your newly created `reducer.js` file.

```js
const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                todos: action.payload
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'SET_TODO_INPUT':
            return {
                ...state,
                todoInput: action.payload
            }
        default:
            return state
    }
}

export default Reducer
```

This code creates three reducers: `SET_TODOS`, `SET_TODO`, and `SET_TODO_INPUT`. Traditionally, reducers are all uppercase strings in [snake case](https://en.wikipedia.org/wiki/Snake_case).

The `action` object is an object that is passed when dispatching the reducers, which we'll get to in a second. The `type` is the reducer's name i.e. `ADD_TODO`. The `payload` is the new state for that reducer. The `payload` could be anything, think of it as the contents of a `setState()` call.

Notice the return statement for each reducer and how they are different. In the `SET_TODOS` return statement, the state is being completely overwritten by the `action.payload`, whereas the `ADD_TODO` reducer is simply appending the `action.payload` to the existing `todos`.

## Using & Updating the Global State

With the store and reducers in place, we can now use and update our global state!

Start by importing `useContext` in your component:

```js
import React, {useContext} from 'react'
```

You'll also need to import your `Context`, the variable we created in the `store.js` file:

```js
import { Context } from './store'
```

Now, within your component, create the `state` and `dispatch` method:

```js
const [state, dispatch] = useContext(Context)
```

Great, you're all set! Let's grab some of our state, say our `todos`:

```js
// This will return the todos array from your state
console.log(state.todos)
```

If you wanted to update the entire state of the `todos` array, you could use the `SET_TODOS` reducer:

```js
dispatch({
    type: 'SET_TODOS', // The name of the reducer
    payload: ['Go to the gym', 'Cook dinner'] // The new state of the reducer
})
```

Or, perhaps you just wanted to add a new todo to the existing list:

```js
dispatch({
    type: 'ADD_TODO', // The name of the reducer
    payload: 'Some new todo item' // Notice in this reducer, the string is appended to the todos array
})
```

The new state depends entirely on how the reducer's return statement is formatted. This is perfect for tasks like adding, subtracting, counting, etc.

## Wrapping Up

Gone are the days of setting up Redux and all of its config for global state. With the addition of React Hooks, it's now entirely native, and a breeze to setup 💨

