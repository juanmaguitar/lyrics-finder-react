import React, { Component } from 'react';

import { getLyrics as getLyricsFromApi } from '../services/apiLyrics'

import App from '../components/App'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      band: '',
      song: '',
      lyrics: ''
    }
    this.getLyrics = this.getLyrics.bind(this)
  }

  getLyrics( band, song ) {

    getLyricsFromApi(band, song)
      .then( dataFromApi => {
        this.setState({
          band: band,
          song: song,
          lyrics: dataFromApi.lyrics
        }, () => console.log( this.state) )
      })
  }

  componentDidMount() {
    console.log("component has been mounted...")
  }

  render() {
    return (
      <App
        getLyrics={this.getLyrics}
        band={this.state.band}
        song={this.state.song}
        lyrics={this.state.lyrics}
      />
    );
  }
}

export default AppContainer;
