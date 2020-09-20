import React from "react";
import PropTypes from "prop-types";

class Gallery extends React.Component {
    hideGallery = (event) => {
        if (event.target.classList.contains("gallery")) {
            event.target.classList.remove("visible");
        }
    };

    getListItem = (url, index) => {
        const visibility = index === this.props.currentPicture ? "visible" : "";
        const bigUrl = url.replace(/(_m\.jpg$)/, ".jpg");

        return (
            <li key={index} className={visibility}>
                <img src={bigUrl} alt={url} />
                <div
                    className="gallery__X"
                    onClick={this.props.removeFromGallery.bind(null, url)}
                >
                    X
                </div>
            </li>
        );
    };

    render() {
        return (
            <div className="gallery" onClick={this.hideGallery}>
                <div className="gallery__content">
                    <div className="gallery__controls">
                        <button
                            className="gallery__control-left"
                            onClick={this.props.updateCurrentPicture.bind(
                                null,
                                "previous"
                            )}
                        >
                            {"<"}
                        </button>
                        <button
                            className="gallery__control-right"
                            onClick={this.props.updateCurrentPicture.bind(
                                null,
                                "next"
                            )}
                        >
                            {">"}
                        </button>
                    </div>
                    <ul className="gallery__list">
                        {this.props.photos.map(this.getListItem)}
                    </ul>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    photos: PropTypes.array.isRequired,
    currentPicture: PropTypes.number.isRequired,
    updateCurrentPicture: PropTypes.func.isRequired,
    removeFromGallery: PropTypes.func.isRequired
};

export default Gallery;
