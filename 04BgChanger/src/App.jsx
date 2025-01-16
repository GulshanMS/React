import React from 'react';
import './App.css'; 
import { useState } from 'react';

function App() {
  const [color,setColor]=useState('olive')
  return (
    <div className="App"
      style={{backgroundColor:color}}
    >
      <div className="button-container">
        <button type="button" className="btn btn-primary" onClick={()=>setColor('Blue')}>Blue</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setColor('grey')}>Grey</button>
        <button type="button" className="btn btn-success" onClick={() => setColor('Green')}>Success</button> <button type="button" className="btn btn-danger" onClick={() => setColor('Red')}>Danger</button> <button type="button" className="btn btn-warning" onClick={() => setColor('Yellow')}>Warning</button> <button type="button" className="btn btn-info" onClick={() => setColor('Teal')}>Info</button> <button type="button" className="btn btn-light" onClick={() => setColor('white')}>White</button> <button type="button" className="btn btn-dark" onClick={() => setColor('Black')}>Dark</button> <button type="button" className="btn btn-link" onClick={() => setColor('Blue')}>Link</button>
      </div>
    </div>
  );
}

export default App;
