import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="message__container"></div>
                <div className="searchresults"></div>
                <Gallery />
            </div>
        );
    }
}

export default App;
