import React, { useState } from 'react';
import './App.css'; 



function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h1>Список элементов</h1>
      <input
        type="text"
        placeholder="Введите элемент"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
