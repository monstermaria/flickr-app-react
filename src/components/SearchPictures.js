import React from "react";
import PropTypes from "prop-types";

class SearchPictures extends React.Component {
    state = { searchTerm: "" };

    getPictures(searchTerm) {
        console.log(searchTerm);

        let flickrSearchUrl =
            "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b54580f369a7eeebecb2004dc429d08f&format=json&nojsoncallback=1";

        fetch(flickrSearchUrl)
            .then((result) => {
                let something = result.body.getReader().read();
                console.log(something);
                something.then((result) => {
                    console.log(result);
                });
            })
            .finally(() => {
                this.props.setSearchResult(null);
            });
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.getPictures(this.state.searchTerm);
        this.setState({ searchTerm: "" });
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
