import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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