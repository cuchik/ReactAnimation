import React from 'react';
import clsx from 'clsx';

import classes from './SquareBlock.module.scss';

const SquareBlock = ({ className, ...other }) => {
  return <div {...other} className={clsx(classes.wrapper, className)} />;
};

export default SquareBlock;
