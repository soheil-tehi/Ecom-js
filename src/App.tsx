import { useState } from 'react';
import { MainPage } from './Pages/index'

import './App.scss'
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <MainPage />
    </>
  )
}

export default App
