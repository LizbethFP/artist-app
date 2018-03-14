import React from 'react';
// import logo from '../logo.svg';
import SearchBar from '../components/Search-bar.js';
import ListArtist from '../components/List-artist.js';
import '../css/App-artist.css';

const AppArtist = () =>  (
    <div>
    <SearchBar/>
    <ListArtist/>
    </div>
  )

export default AppArtist;
