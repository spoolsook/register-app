import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropDown from './components/LocationDropDown';

//--> function component
function App() {

  let provinces = [
    { id:1 ,name: 'กรุงเทพมหานคร' },
    { id:2 ,name: 'นนทบุรี' }
  ]

  return (
    <div>
      <LocationDropDown defaultLabel="จังหวัด" locations={provinces} />
    </div>
  );
}

export default App;
