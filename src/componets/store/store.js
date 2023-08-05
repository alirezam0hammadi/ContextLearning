import React, { useState, createContext } from "react";

export const AppStateContext = createContext();

const db = [
    {name: 'alireza', lastName: 'mamadi', age: 21},
    {name: 'amir', lastName: 'amani', age: 25}
]

const AppStateContextProvider = props => {
    const [appState, setAppState] = useState({
        cartOpen: false
    });
    const [items,setItems]=useState([])
    const addToCard=(name,price)=>{
        setItems((prevState => [...prevState,{name,price}]))
        console.log('store',name,price,items)
    }

    return <AppStateContext.Provider value={{items,addToCard}}> {props.children} </AppStateContext.Provider>;
};
export default AppStateContextProvider;