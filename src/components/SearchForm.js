import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
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
    this.props.handleSubmit( this.state.username )
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={ this.handleSubmit }>
        <div className="row">
          <div className="form-group">
            <label htmlFor="band">Username</label>
            <input
              type="text"
              className="input-lg form-control"
              id="band"
              name="username"
              placeholder="Band Name..."
              value={ this.state.username }
              onChange={ this.handleChange }
            />
          </div>
        </div>

        <button type="submit" className="btn-lg btn-block btn btn-primary">Find this user!!</button>

      </form>

    )
  }
}

export default SearchForm;
