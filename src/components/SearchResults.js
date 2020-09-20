import React from "react";
import PropTypes from "prop-types";

class SearchResults extends React.Component {
    getPhotoUrl(farmId, serverId, id, secret) {
        return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_m.jpg`;
    }

    toggleSelected = (event) => {
        console.log(event.target);
        event.stopPropagation();
        const classList = event.target.classList;
        if (classList.contains("selected")) {
            classList.remove("selected");
            this.props.removeFromGallery(event.target.src);
        } else {
            classList.add("selected");
            this.props.addToGallery(event.target.src);
        }
        // console.log(event.target.src);
        // event.target.render();
    };

    getListItem = (photoInfo) => {
        // console.log(photoInfo);
        // const srcUrl = this.getPhotoUrl(
        //     photoInfo.farm,
        //     photoInfo.server,
        //     photoInfo.id,
        //     photoInfo.secret
        // );
        // console.log(srcUrl);

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
