import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SubmitButtons = ({ buttonText }) => (
  <Fragment>
    <Button
      type="submit"
      variant="contained"
      color="primary"
    >
      {buttonText}
    </Button>
  </Fragment>
);

SubmitButtons.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object.isRequired,
};

export default SubmitButtons;
