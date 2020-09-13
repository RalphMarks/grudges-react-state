import React, { useState } from 'react';

//import id from 'uuid/v4';
import { v4 } from 'uuid';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const Application = () => {
  const [grudges, setGrudges] = useState(initialState);

  const addGrudge = grudge => {
    grudge.id = v4();
    grudge.forgiven = false;
    setGrudges([grudge, ...grudges]);
  };

  const toggleForgiveness = id => {
    setGrudges(
      grudges.map(grudge => {
        if (grudge.id !== id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      })
    );
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
