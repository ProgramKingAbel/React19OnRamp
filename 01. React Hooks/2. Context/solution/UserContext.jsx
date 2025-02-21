import { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {

        const [ user, setUser ] = useState({ name: "Abel", age: 90 })
        return (
                <UserContext.Provider value={{user, setUser}}>
                        {children}
                </UserContext.Provider>
        );
}

export { UserContext, UserProvider };
                                  