import React, { createContext, useState, useEffect } from 'react';
import getServerSideProps from '../utils/getServerSideProps';

export const Context = createContext();

const Collection = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    getServerSideProps({
      loading,
      setLoading,
      collection,
      setCollection
    });
  }, []);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        collection,
        setCollection
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Collection;