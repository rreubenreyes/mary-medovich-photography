import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => {
    const { title, location, description, tags } = photo;

    return (
        <div className="photo-container">
            <h3 className="photo-container__h3--title">{title}</h3>
            <span className="photo-container__span--location">
                {location.latitude}
                {location.longitude}
            </span>
            <span className="photo-container__span--description">
                {description.markdown}
            </span>
            <span className="photo-container__span--tags">{tags.name}</span>
        </div>
    );
};

Photo.propTypes = {
    photo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        }),
        description: PropTypes.shape({
            markdown: PropTypes.string.isRequired,
        }),
        tags: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }).isRequired,
};

export default Photo;
