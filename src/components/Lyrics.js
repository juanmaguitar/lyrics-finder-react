import React, { Component } from 'react';

class Lyrics extends Component {

  render() {
    return (
      <div className="jumbotron">
        {
          this.props.song &&
          this.props.band &&
          <h1>{ this.props.song } - { this.props.band }</h1>
        }
        {
          this.props.lyrics &&
          this.props.lyrics
                .split('\n')
                .filter( line => !line.includes('Paroles de la chanson'))
                .map( line => <p>{ line }</p> )
        }
      </div>
    )
  }
}

export default Lyrics;
