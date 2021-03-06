import React from 'react';
import {
  HeaderBar,
  LinkButtons,
} from '../components';

const title = {
  pageTitle: 'Home Screen',
}

const Home = () => (
  <div className="home-page">
    <HeaderBar title={title} />
    <LinkButtons
      buttonText="Register"
      link="/register"
    />
    <LinkButtons 
      buttonText="Login"
      link="/login" 
    />
  </div>
);

export default Home;