import React, { useEffect, useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [description, setDescription] = useState([]);

const getDescription = async () => {
  try {
    const response = await fetch('http://localhost:5000/todos');
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
    getDescription();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {description.map((todo, index) => (
          <li key={index}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
