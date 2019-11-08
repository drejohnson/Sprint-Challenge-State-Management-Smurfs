1. What problem does the context API help solve?
   Sharing values between components without props drilling
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   1. Actions are used to send payload data from your application to your store
   2. A Reducer is a pure function, it takes the initialState state and an action, and returns the next state
   3. Store allows components to share state.
   4. Redux being the single source of truth means that it's the only way to change your app state.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is global state that can be shared with all components
   Component state is local state specific the that component
   You would use Application state when components depends on state from other components to do something.
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It's redux middleware that allows for side-effects like data fetching in redux. It makes your action creators async
5. What is your favorite state management system you've learned and this sprint? Please explain why!
   I prefer context api + useReducer and useEffect over redux because it's provides 90% of the functionality of redux without the added boilerplate.
