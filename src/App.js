import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropDown from './components/LocationDropDown';
import LocationSelectForm from './components/LocationSelectForm';

//--> function component
function App() {

  // let provinces = [
  //   { id:1 ,name: 'กรุงเทพมหานคร' },
  //   { id:2 ,name: 'นนทบุรี' }
  // ]

  return (
    <div>
        <LocationSelectForm/>
    </div>
  );
}

export default App;
