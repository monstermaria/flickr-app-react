import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Gallery from "./components/Gallery";

class App extends React.Component {
    state = {
        searchResult: [],
        gallery: []
    };

    setSearchResult = (searchResult) => {
        this.setState({
            searchResult: searchResult.map((photoInfo) => {
                const url =
                    "https://farm" +
                    photoInfo.farm +
                    ".staticflickr.com/" +
                    photoInfo.server +
                    "/" +
                    photoInfo.id +
                    "_" +
                    photoInfo.secret +
                    "_m.jpg";
                return {
                    url: url,
                    title: photoInfo.title,
                    selected: url in this.state.gallery
                };
            })
        });
    };

    addToGallery = (urlToAdd) => {
        this.setState({
            gallery: [...this.state.gallery, urlToAdd],
            searchResult: this.state.searchResult.map((photoInfo) => {
                if (urlToAdd === photoInfo.url) {
                    photoInfo.selected = true;
                    return photoInfo;
                }
                return photoInfo;
            })
        });
    };

    removeFromGallery = (urlToRemove) => {
        this.setState({
            gallery: this.state.gallery.filter((url) => {
                return url !== urlToRemove;
            }),
            searchResult: this.state.searchResult.map((photoInfo) => {
                if (urlToRemove === photoInfo.url) {
                    photoInfo.selected = false;
                    return photoInfo;
                }
                return photoInfo;
            })
        });
    };

    render() {
        return (
            <div>
                <Header setSearchResult={this.setSearchResult} />
                <div className="message__container"></div>
                <SearchResults
                    photos={this.state.searchResult}
                    addToGallery={this.addToGallery}
                    removeFromGallery={this.removeFromGallery}
                />
                <Gallery
                    photos={this.state.gallery}
                    removeFromGallery={this.removeFromGallery}
                />
            </div>
        );
    }
}

export default App;
