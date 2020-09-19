import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="logo__wrapper"></div>
                <div className="searchfield">
                    <input
                        type="text"
                        placeholder="Search flickr for photos..."
                        className="searchfield__input"
                    />
                    <button className="searchfield__submit-button">
                        Search
                    </button>
                </div>
                <div className="gallery-button__wrapper">
                    <button className="gallery-button">Show Gallery</button>
                </div>
            </div>
        );
    }
}

export default Header;
