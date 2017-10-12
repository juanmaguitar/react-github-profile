import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import { getProfileData } from '../services/apiGithub'

import NavbarApp from './NavbarApp'
import Profile from './Profile'
import SearchForm from './SearchForm'

class App extends Component {

  constructor() {
    super()
    this.state = {
      profile: {}
    }
    this.getProfileGithub = this.getProfileGithub.bind(this)
  }

  getProfileGithub(username) {

    getProfileData(username)
      .then( data => {
        console.log(data);
        this.setState({
          profile: data
        })
      })
  }

  render() {
    return (
      <div>
        <NavbarApp />
        <Grid>
          <SearchForm handleSubmit={this.getProfileGithub}/>
          <Profile profile={ this.state.profile }/>
        </Grid>
      </div>
    )
  }
}

export default App;
