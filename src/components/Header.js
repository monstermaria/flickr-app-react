import React from "react";
import PropTypes from "prop-types";
import SearchPictures from "./SearchPictures";

class Header extends React.Component {
    showGallery = () => {
        document.querySelector(".gallery").classList.add("visible");
    };

    render() {
        return (
            <div className="controls">
                <div className="logo__wrapper"></div>
                <SearchPictures setSearchResult={this.props.setSearchResult} />
                <div className="gallery-button__wrapper">
                    <button
                        className="gallery-button"
                        onClick={this.showGallery}
                    >
                        Show Gallery
                    </button>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    setSearchResult: PropTypes.func.isRequired
};

export default Header;
