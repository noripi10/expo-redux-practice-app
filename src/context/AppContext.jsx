import React, { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [user, setUser] = useState({
		uid: '',
		userName: '',
	});
	return (
		<AppContext.Provider value={{ user, setUser }}>
			{props.children}
		</AppContext.Provider>
	);
};
