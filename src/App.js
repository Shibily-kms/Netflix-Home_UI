import React from 'react';
import './App.css';
import { originals, action, comedy, horror, romance, documentaries } from './urls';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={action} title='Netflix Originals'  />
      <RowPost url={originals} title='Actions' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
