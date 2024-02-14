import logo from './logo.svg';
import './App.css';
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';
import React from 'react';

function App() {
  const [shouldNavigate, setShouldNavigate] = React.useState(false);
  const navigate = useNavigate();

  const navigateMe = () => {
    setShouldNavigate(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavLink className="my_navlink" to='/weather'>Weather NavLink</NavLink>
        <Link to='/weather'>Weather Link</Link>
        {shouldNavigate ? <Navigate to='/weather' /> : null}

        <button onClick={() => navigateMe(true)}>Navigate using component</button>

        <button onClick={() => navigate('/weather')}>Navigate using hook</button>
      </header>
    </div>
  );
}

export default App;
