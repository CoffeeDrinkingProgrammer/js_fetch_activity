// import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';

function App() {
  const [quote, setQuote] = useState(0);
  const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setQuote(response)
    })
  }

  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setQuote(response)
    })
  }, [])

  return (
    <div className="App" >
      <header> Paulo's React JS with API</header>
      <div className="content">
        Random Quote to Brighten up your day
        {(quote.statusCode !== 404)? 
          <center>
              <div className="quote">{quote.content}</div>
              <div className="author"> - {quote.author} </div>
            
          </center>
        : <i> nothing to see here </i>
        }
      </div>
      <button onClick={getQuote}> Try Again! </button>
    </div>
  );
}

export default App;
