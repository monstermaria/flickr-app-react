import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                <div className="gallery__content">
                    <div className="gallery__controls">
                        {/* <!-- <div class='gallery__control-spacer'></div> --> */}
                        <button className="gallery__control-left">
                            Left Arrow
                        </button>
                        <button className="gallery__control-right">
                            Right Arrow
                        </button>
                        {/* <!-- <a class='gallery__control-removeall'>Remove all</a> --> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
