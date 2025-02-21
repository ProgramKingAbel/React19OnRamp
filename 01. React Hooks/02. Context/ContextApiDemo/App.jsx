import ComponentC from './components/ComponentC';
import { createContext } from 'react';

export const Data = createContext();
export const Data1 = createContext();

const App = () => {

        const name = "Abel";
        const age = 77;
        return (
                <Data.Provider value={name}>
                        <Data1.Provider value={age}>
                                <ComponentC />
                        </Data1.Provider>
                </Data.Provider>
        );
}
export default App;
