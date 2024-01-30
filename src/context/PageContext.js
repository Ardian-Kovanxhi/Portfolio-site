import React, { createContext, useContext, useState } from 'react';

import windowsXp from '../images/backgrounds/windowsXP.png'

const PageContext = createContext();

export const PageProvider = ({ children }) => {

    const [page, setPage] = useState(true)

    const [background, setBackground] = useState(windowsXp);

    return (
        <PageContext.Provider value={{ page, setPage, background, setBackground }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => {
    return useContext(PageContext);
};