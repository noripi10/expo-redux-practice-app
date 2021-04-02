import React, { useState, createContext, useEffect } from 'react';
import { AppState } from 'react-native';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [user, setUser] = useState({
    uid: '',
    userName: '',
  });
  const [isFocus, setFocus] = useState(true);

  const stateChangeHandler = (state) => {
    if (state.match('inactive|background')) {
      setFocus(false);
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', stateChangeHandler);

    return () => {
      AppState.removeEventListener('change', stateChangeHandler);
    };
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, isFocus, setFocus }}>
      {props.children}
    </AppContext.Provider>
  );
};
