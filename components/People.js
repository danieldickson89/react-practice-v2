import React from 'react';
import axios from 'axios';

export default class People extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    axios.get(`https://node-practicing-demon.glitch.me/people`)
      .then(res => {
        const people = res.data.response;
        this.setState({ people });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.people
            .map(person =>
              <p key={person._id}>{person.firstName}</p>
            )
        }
      </ul>
    )
  }
}