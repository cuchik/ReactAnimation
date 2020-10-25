import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import SquareBlock from 'components/SquareBlock';
import classes from './Home.module.scss';

const Home = ({
  updateTransitionSpeed,
  transitionSpeed,
  updatePosition,
  storePosition,
}) => {
  const [speed, setSpeed] = useState(transitionSpeed);
  const [position, setPosition] = useState(storePosition);
  const handleMove = e => {
    const elementId = e.target.id;
    if (!['square', 'input'].includes(elementId)) {
      const currentPosition = {
        x: e.clientX,
        y: e.clientY,
      };
      setPosition(currentPosition);
      updatePosition(currentPosition);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleMove);
    return () => {
      document.removeEventListener('click', handleMove);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.wrapper}>
      <Input
        id="input"
        value={speed || 100}
        type="number"
        label="Transition speed (milisecond)"
        onChange={e => {
          const value = parseInt(e.target.value, 10);
          setSpeed(value);
        }}
        onKeyPress={e => {
          if (e.key === 'Enter' && transitionSpeed !== speed) {
            updateTransitionSpeed(speed);
          }
        }}
        onBlur={() => {
          if (transitionSpeed !== speed) {
            updateTransitionSpeed(speed);
          }
        }}
        className={classes.input}
      />
      <SquareBlock
        id="square"
        className={classes.square}
        style={{
          transition: `All ${transitionSpeed / 1000}s ease`,
          left: `${position.x || 50}px`,
          top: `${position.y || 180}px`,
        }}
      />
    </div>
  );
};

export default Home;
