import React, { useState, useEffect } from 'react';
import Auth from './auth/Auth';
import Combos from './combo/ComboIndex';
import Navbar from './sitebar/Sitebar';
import './App.css';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  const [selected, setSelected] = useState('')
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? 
            <div>
              <Navbar 
                clearToken={clearToken}
                setSelected={setSelected}
                />
              <Combos 
                selected={selected}
                />
            </div> 
            : <Auth 
                updateToken={updateToken} 
                />)
  }

  return (
    <div>
      {protectedViews()}
    </div>
  );
}

export default App;
