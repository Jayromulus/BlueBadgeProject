import React, { useState } from 'react';
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

  const [selected, setSelected] = useState('Azrael')
  const [second, setSecond] = useState('Solo')
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? 
            <div>
              <Navbar 
                clearToken={clearToken}
                selected={selected}
                setSelected={setSelected}
                second={second}
                setSecond={setSecond}
                />
              <Combos 
                selected={selected}
                second={second}
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
