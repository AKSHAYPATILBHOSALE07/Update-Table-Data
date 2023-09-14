// src/App.js
import React, { useState } from 'react';
import ButtonPanel from './components/ButtonPanel';
import DataTable from './components/DataTable';


function App() {
  const [data, setData] = useState([]);

  const fetchData = (buttonNumber) => {
    // Replace with your dummy API endpoint
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${buttonNumber}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <ButtonPanel onClick={fetchData} />
      </div>
      <div style={{ flex: '3' }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default App;
