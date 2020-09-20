import React from "react";
import PropTypes from "prop-types";

class Gallery extends React.Component {
    hideGallery = (event) => {
        console.log("gallery clicked");
        if (event.target.classList.contains("gallery")) {
            console.log("gallery found, hiding it");
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
        console.log("previous");
        const current = document.querySelector(".gallery__list .visible");
        if (current && current.previousElementSibling) {
            current.classList.remove("visible");
            current.previousElementSibling.classList.add("visible");
        }
    };

    nextItem = (event) => {
        console.log("next");
        const current = document.querySelector(".gallery__list .visible");
        if (current && current.nextElementSibling) {
            current.classList.remove("visible");
            current.nextElementSibling.classList.add("visible");
        }
    };

    render() {
        // console.log(this.props.photos);
        return (
            <div className="gallery" onClick={this.hideGallery}>
                <div
                    className="gallery__content"
                    onClick={(event) => {
                        console.log("gallery__content clicked");
                    }}
                >
                    <div
                        className="gallery__controls"
                        onClick={() => console.log("gallery__controls clicked")}
                    >
                        {/* <!-- <div class='gallery__control-spacer'></div> --> */}
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
                        {/* <!-- <a class='gallery__control-removeall'>Remove all</a> --> */}
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
