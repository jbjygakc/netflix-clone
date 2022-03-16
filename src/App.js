import React  from 'react';
import './App.css';
import requests from './requests';
import Row from './Row.jsx';
import Banner from './banner.jsx';
import Nav from './Nav.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title ="Netflix Originals " url={requests.fetchNetflixOriginals} isLarge />
      <Row title ="Trendings " url={requests.fetchTrending}   />
      <Row title ="Action Movies " url={requests.fetchActionMovies} />
      <Row title ="Comedy Movies " url={requests.fetchComedyMovies} />
      <Row title ="Top Rated " url={requests.fetchTopRated} />
      <Row title ="Romance Movies " url={requests.fetchRomanceMovies} />
      <Row title ="Documentaries " url={requests.fetchDocumentaries} />
      <Row title ="Horror Movies " url={requests.fetchHorrorMovies} />
      
    </div>
  );
}

export default App;
