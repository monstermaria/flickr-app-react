import React from "react";
import PropTypes from "prop-types";

class SearchPictures extends React.Component {
    state = { searchTerm: "" };

    getPictures(searchTerm) {
        const searchUrl =
            "https://api.flickr.com/services/rest/?method=flickr.photos.search&" +
            "api_key=b54580f369a7eeebecb2004dc429d08f&format=json&nojsoncallback=1" +
            "&text=" +
            searchTerm;

        fetch(searchUrl)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                json.photos &&
                    json.photos.photo &&
                    this.props.setSearchResult(json.photos.photo);
            })
            .catch((error) => {
                console.log("Oops! Something went wrong...");
                console.log(error);
            });
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.getPictures(this.state.searchTerm);
    };

    render() {
        return (
            <form className="searchfield" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    placeholder="Search flickr for photos..."
                    className="searchfield__input"
                    onChange={this.onChange}
                    autoFocus
                />
                <input
                    className="searchfield__submit-button"
                    type="submit"
                    value="Search"
                />
            </form>
        );
    }
}

SearchPictures.propTypes = {
    setSearchResult: PropTypes.func.isRequired
};

export default SearchPictures;
