import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LinkButtons = ({ buttonText, link }) => (
  <Fragment>
    <Link to={link}>
      <Button variant="contained" color="primary">
        {buttonText}
      </Button>
    </Link>
  </Fragment>
);

LinkButtons.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.object.isRequired,
  link: PropTypes.string,
};

LinkButtons.defaultProps = {
  link: '/',
  buttonText: 'Default Button Text',
};

export default LinkButtons;
