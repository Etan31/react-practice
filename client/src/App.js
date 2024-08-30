import React, { useEffect, useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/numbers");
      const jsonData = await response.json();

      setNumbers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Numbers List</h1>
      <ul>
        {numbers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;