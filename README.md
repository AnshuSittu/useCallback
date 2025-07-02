# React useCallback

🔁 What is useCallback?
useCallback is a React Hook that returns a memoized version of a callback function, so the function is only recreated when its dependencies change.
This helps to prevent unnecessary re-renders, especially when passing functions as props to child components.

🔹 Syntax
const memoizedCallback = useCallback(() => {
  // some logic
}, [dependencies]);

#Just like useMemo, but instead of returning a value, it returns a function.

🧠 Why use useCallback?
In React:
Functions are recreated on every render.
If you pass these functions to child components, it may cause them to re-render even if their behavior hasn’t changed.
useCallback helps prevent that unnecessary render.

✅ When to Use useCallback
Use it when:
you're passing a function to a child component that is memoized (via React.memo).
The function depends on state or props, but you don’t want it recreated unless those change.
You're optimizing performance-critical code.

📦 Summary Table
| Feature    | `useCallback`                        |
| ---------- | ------------------------------------ |
| Purpose    | Memoizes a function                  |
| Returns    | The same function unless deps change |
| Helps with | Preventing child re-renders          |
| Common Use | With `React.memo` child components   |
| Avoid if   | Function recreation isn’t a problem  |

