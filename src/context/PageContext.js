import React, { createContext, useContext, useState } from 'react';

import windowsXp from '../images/backgrounds/windowsXP.png'

const PageContext = createContext();

export const PageProvider = ({ children }) => {

	// const [page, setPage] = useState(false);
	// const [wipeWidth, setWipeWidth] = useState('100%');
	// const [wipeHeight, setWipeHeight] = useState('0%');
	const [page, setPage] = useState(true);
	const [wipeWidth, setWipeWidth] = useState('0%');
	const [wipeHeight, setWipeHeight] = useState('100%');
	const [vis, setVis] = useState(false);

	const [background, setBackground] = useState(windowsXp);

	return (
		<PageContext.Provider value={{
			page, setPage,
			background, setBackground,
			wipeWidth, setWipeWidth,
			wipeHeight, setWipeHeight,
			vis, setVis
		}}>
			{children}
		</PageContext.Provider>
	);
};

export const usePage = () => {
	return useContext(PageContext);
};
