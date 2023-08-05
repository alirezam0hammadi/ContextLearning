import './App.scss'
import './assests/index'
// import Index from './componets/index'
import React  from 'react';
import Header from "./componets/Header/header";
import Main from './componets/Main/main'
import AppStateContextProvider from "./componets/store/store";
import Card from "./componets/Card/card";


function App() {
    // console.log('1')
    return (
        <>
            <AppStateContextProvider>
                <Header/>
                {/*<Card/>*/}
                <Main/>
                <Card/>
            </AppStateContextProvider>

        </>
    );

}

export default App;
