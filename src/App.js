import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

class App extends React.Component {
    state = {
        searchResult: [],
        gallery: []
    };

    setSearchResult = (searchResult) => {
        this.setState({ searchResult });
    };

    render() {
        return (
            <div>
                <Header setSearchResult={this.setSearchResult} />
                <div className="message__container"></div>
                <div className="searchresults"></div>
                <Gallery />
            </div>
        );
    }
}

export default App;
