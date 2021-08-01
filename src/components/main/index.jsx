import React, { useContext } from 'react';
import { Context } from '../../context/Collection';
import View from '../view';

const Main = () => {
  const context = useContext(Context);
  const { loading } = context;
  return (
    <main>
      {loading && (
        <h1>Loading ...</h1>
      )}
      {!loading && (
        <View />
      )}
    </main>
  )
};

export default Main;