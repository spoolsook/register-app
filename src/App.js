import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropDown from './components/LocationDropDown';
import ThaiLocationSelectForm from './components/ThaiLocationSelectForm';

//--> function component
function App() {

  // let provinces = [
  //   { id:1 ,name: 'กรุงเทพมหานคร' },
  //   { id:2 ,name: 'นนทบุรี' }
  // ]<LocationSelectForm/>

  return (
    <div>
         <ThaiLocationSelectForm />
    </div>
  );
}

export default App;
