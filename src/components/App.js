import React from 'react';

import './App.css';

import Lyrics from './Lyrics'
import FormSearch from './FormSearch'

const App = props => (
  <div className="container">
    <h1 className="main-title">Lyrics Finder <span aria-label="music" role="img">🎶</span></h1>
    <FormSearch
      getLyrics={ props.getLyrics }
    />
    <Lyrics
      band={ props.band }
      song={ props.song }
      lyrics={ props.lyrics }
    />
  </div>
)

export default App;
