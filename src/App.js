import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Gallery from "./components/Gallery";

function loadGallery() {
    const galleryJSON = localStorage.flickrGallery;
    // console.log(galleryJSON);
    const gallery = JSON.parse(galleryJSON);
    // console.log(gallery);
    return gallery;
}

class App extends React.Component {
    state = {
        searchResult: [],
        gallery: loadGallery(),
        currentPicture: 0
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
                    selected: this.state.gallery.includes(url)
                };
            })
        });
    };

    addToGallery = (urlToAdd) => {
        // add photo only if it is not already in the gallery
        if (this.state.gallery.includes(urlToAdd)) {
            return;
        }

        // save the updated gallery
        const newGallery = [...this.state.gallery, urlToAdd];
        localStorage.flickrGallery = JSON.stringify(newGallery);

        // update state
        this.setState({
            gallery: newGallery,
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
        // if the picture to remove is the last one in the gallery,
        // and it is the current picture,
        // make the previous picture the current one
        const lastPictureIndex = this.state.gallery.length - 1;
        const urlLastPicture = this.state.gallery[lastPictureIndex];
        let currentPicture = this.state.currentPicture;

        if (urlToRemove === urlLastPicture && currentPicture > 0) {
            currentPicture--;
        }

        // save the updated gallery
        const newGallery = this.state.gallery.filter((url) => {
            return url !== urlToRemove;
        });
        localStorage.flickrGallery = JSON.stringify(newGallery);

        // update state
        this.setState({
            currentPicture,
            gallery: newGallery,
            searchResult: this.state.searchResult.map((photoInfo) => {
                if (urlToRemove === photoInfo.url) {
                    photoInfo.selected = false;
                    return photoInfo;
                }
                return photoInfo;
            })
        });
    };

    updateCurrentPicture = (direction) => {
        const currentPicture = this.state.currentPicture;

        if (direction === "previous") {
            if (currentPicture > 0) {
                this.setState({ currentPicture: currentPicture - 1 });
            }
        }
        if (direction === "next") {
            if (currentPicture < this.state.gallery.length - 1) {
                this.setState({ currentPicture: currentPicture + 1 });
            }
        }
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
                    currentPicture={this.state.currentPicture}
                    updateCurrentPicture={this.updateCurrentPicture}
                    removeFromGallery={this.removeFromGallery}
                />
            </div>
        );
    }
}

export default App;
