import React from "react";
import PropTypes from "prop-types";

class SearchResults extends React.Component {
    toggleSelected = (event) => {
        // currentTarget is the li-element, target is the img-element
        const classList = event.currentTarget.classList;
        if (classList.contains("selected")) {
            this.props.removeFromGallery(event.target.src);
        } else {
            this.props.addToGallery(event.target.src);
        }
    };

    getListItem = (photoInfo) => {
        return (
            <li
                key={photoInfo.url}
                className={photoInfo.selected ? "selected" : ""}
                onClick={this.toggleSelected}
            >
                <img src={photoInfo.url} alt={photoInfo.title} />
            </li>
        );
    };

    render() {
        return (
            <div className="searchresults">
                <ul className="searchresults__list">
                    {this.props.photos.map(this.getListItem)}
                </ul>
            </div>
        );
    }
}

SearchResults.propTypes = {
    photos: PropTypes.array.isRequired,
    addToGallery: PropTypes.func.isRequired,
    removeFromGallery: PropTypes.func.isRequired
};

export default SearchResults;
