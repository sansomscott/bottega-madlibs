import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className='home'>
       { Header () }
       <Card />
      </div>
    );
  }
}

//things to fix
//number labels in text
//generate button placement

export default Home;