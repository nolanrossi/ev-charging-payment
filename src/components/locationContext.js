import React, { createContext, useContext, useState } from 'react';

// Create the context
export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [hasInput, setHasInput] = useState(false);

    return (
        <LocationContext.Provider value={{ hasInput, setHasInput }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
};
