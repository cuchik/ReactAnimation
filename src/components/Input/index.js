import React from 'react';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

import classes from './Input.module.scss';

const Input = ({ className, ...other }) => {
  return <TextField {...other} className={clsx(classes.wrapper, className)} />;
};

export default Input;
