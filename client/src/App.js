import React, { useEffect, useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [description, setDescription] = useState([]);

  const getNumbers = async () => {
    try {
      const response = await fetch('http://localhost:5000/numbers');
      if (response.ok) {
        const jsonData = await response.json();
        setNumbers(jsonData);
      } else {
        console.error('Server responded with non-JSON data:', await response.text());
      }
    } catch (err) {
      console.error('Error fetching numbers:', err.message);
    }
  };

const getDescription = async () => {
  try {
    const response = await fetch('http://localhost:5500/todos1');
    if (!response.ok) {
      console.error(`Server responded with a status: ${response.status}`);
      const errorText = await response.text();
      console.error('Error response text:', errorText);
      return;
    }
    const jsonData = await response.json();
    setDescription(jsonData);
  } catch (err) {
    console.error('Error fetching todos:', err.message);
  }
};

  useEffect(() => {
    getNumbers();
    getDescription();
  }, []);

  return (
    <div>
      <h1>Numbers List</h1>
      <ul>
        {numbers.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Todos</h2>
      <ul>
        {description.map((todo, index) => (
          <li key={index}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
