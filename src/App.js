import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

function App() {

    const USER = 'Менеджеров Сергей';

    return (
        <div className="App">
            <Header USER={USER}/>
            <Navigation/>
            <Content USER={USER}/>
        </div>
    );
}

export default App;
