import React from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';

const urlImage = 'https://avatars2.githubusercontent.com/u/422576?v=4&s=460'

const Profile = props => (
  <Jumbotron>
    <Row>
      <Col sm={4}>
        <Image src={ props.profile.avatar_url } circle responsive />
      </Col>
      <Col sm={8}>
        <h1>{ props.profile.name }</h1>
        <ul className="lead">
          <li><strong>Public Repos: </strong>{ props.profile.public_repos }</li>
          <li><strong>Folowing: </strong>{ props.profile.following }</li>
          <li><strong>Followers: </strong>{ props.profile.followers }</li>
        </ul>

    </Col>
    </Row>


  </Jumbotron>
)

export default Profile;
