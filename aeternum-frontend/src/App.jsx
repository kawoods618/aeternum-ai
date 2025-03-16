import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ticker, setTicker] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnalysis = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://aeternum-ai-production.up.railway.app/analyze?ticker=${ticker}`);
      setAnalysis(response.data);
    } catch (err) {
      setError('Failed to fetch analysis.');
      setAnalysis(null);
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Aeternum AI Stock Advisor 📈</h1>
      <input
        type="text"
        placeholder="Enter ticker (e.g., AAPL)"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
      />
      <button onClick={analyzeStock}>Analyze</button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {analysis && (
        <div className="result">
          <h3>Analysis for {analysis.ticker}</h3>
          <p><strong>Price:</strong> ${analysis.current_price.toFixed(2)}</p>
          <p><strong>Date:</strong> {analysis.date}</p>
        </div>
      )}
    </div>
  );
}

export default App;