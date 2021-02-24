import './grid.css';
import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Content/>
        </div>
    );
}

export default App;
