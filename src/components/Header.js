import React from "react";
import PropTypes from "prop-types";
import SearchPictures from "./SearchPictures";

class Header extends React.Component {
    render() {
        return (
            <div className="controls">
                <div className="logo__wrapper"></div>
                <SearchPictures setSearchResult={this.props.setSearchResult} />
                <div className="gallery-button__wrapper">
                    <button className="gallery-button">Show Gallery</button>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    setSearchResult: PropTypes.func.isRequired
};

export default Header;
