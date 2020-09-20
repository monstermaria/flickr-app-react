import React from "react";
import PropTypes from "prop-types";

class Gallery extends React.Component {
    hideGallery = (event) => {
        if (event.target.classList.contains("gallery")) {
            event.target.classList.remove("visible");
        }
    };

    getListItem = (url, index) => {
        const visibility = index === 0 ? "visible" : "";
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

    previousItem = (event) => {
        const current = document.querySelector(".gallery__list .visible");
        if (current && current.previousElementSibling) {
            current.classList.remove("visible");
            current.previousElementSibling.classList.add("visible");
        }
    };

    nextItem = (event) => {
        const current = document.querySelector(".gallery__list .visible");
        if (current && current.nextElementSibling) {
            current.classList.remove("visible");
            current.nextElementSibling.classList.add("visible");
        }
    };

    render() {
        return (
            <div className="gallery" onClick={this.hideGallery}>
                <div className="gallery__content">
                    <div className="gallery__controls">
                        <button
                            className="gallery__control-left"
                            onClick={this.previousItem}
                        >
                            {"<"}
                        </button>
                        <button
                            className="gallery__control-right"
                            onClick={this.nextItem}
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
    removeFromGallery: PropTypes.func.isRequired
};

export default Gallery;
