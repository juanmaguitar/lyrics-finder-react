import React from 'react';

const Lyrics = ({ lyrics, band, song }) => (
  <div className="jumbotron">
    {
      song && band &&
      <h1>{ song } - { band }</h1>
    }
    {
      lyrics && lyrics.split('\n')
                  .filter( line => !line.includes('Paroles de la chanson'))
                  .map( line => <p>{ line }</p> )
    }
  </div>
)

export default Lyrics;
