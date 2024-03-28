import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React app.</p>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  return (
    <div>
      <p>This is a custom component.</p>
    </div>
  );
}

export default App; // Export the App component
