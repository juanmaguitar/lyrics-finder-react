import React, { Component } from 'react';

import './FormSearch.css';

class FormSearch extends Component {
  constructor() {
    super()
    this.state = {
      band: '',
      song: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { band, song } = this.state
    this.props.getLyrics( band, song )
  }

  render() {
    return (
      <form className="FormSearch" onSubmit={ this.handleSubmit }>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="band">Band</label>
            <input
              type="text"
              className="input-lg form-control"
              id="band"
              name="band"
              placeholder="Band Name..."
              value={ this.state.band }
              onChange={ this.handleChange }
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="song">Song</label>
            <input
              type="text"
              className="input-lg form-control"
              id="song"
              name="song"
              placeholder="Song Title..."
              value={ this.state.song }
              onChange={ this.handleChange }
            />
          </div>
        </div>

        <button type="submit" className="btn-lg btn-block btn btn-primary">Get the lyrics!!</button>

      </form>

    )
  }
}

export default FormSearch;
