import React, { useState, createContext, useEffect } from 'react';
import { useRef } from 'react';
import { AppState } from 'react-native';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const appState = useRef(AppState.currentState);

  const [user, setUser] = useState({});
  const [isLock, setLock] = useState(true);

  const stateChangeHandler = (nextState) => {
    // console.log({ nextState });
    // console.log(appState.current);
    if (appState.current.match(/background/) && nextState === 'active') {
      setLock(true);
    }
    appState.current = nextState;
  };

  useEffect(() => {
    AppState.addEventListener('change', stateChangeHandler);

    return () => {
      AppState.removeEventListener('change', stateChangeHandler);
    };
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, isLock, setLock }}>
      {props.children}
    </AppContext.Provider>
  );
};
