import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const backendUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${backendUrl}/analyze?ticker=AAPL`)
      .then(response => setData(response.data))
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <div>
      <h1>🚀 Aeternum AI Financial Advisor</h1>
      {data ? (
        <div>
          <p><strong>Ticker:</strong> {data.ticker}</p>
          <p><strong>Price:</strong> ${data.current_price}</p>
          <p><strong>Date:</strong> {data.date}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
