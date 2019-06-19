import React, { useState, useEffect } from 'react';
import Auth from './auth/Auth';
import Combos from './combo/ComboIndex';
import Navbar from './sitebar/Sitebar';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? 
            <div>
              <Navbar 
                setSelectedCharacter={setSelectedCharacter} 
                clearToken={clearToken}/>
              <Combos 
                selectedCharacter={selectedCharacter}/>
            </div> 
            : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      {protectedViews()}
    </div>
  );
}

export default App;
