import React from 'react';
import PropTypes from 'prop-types';

const PostPreview = ({ blogPost }) => {
    const { title, createdAt, updatedAt } = blogPost;
    return (
        <>
            <p>{title}</p>
            <p>{createdAt}</p>
            <p>{updatedAt}</p>
        </>
    );
};

PostPreview.propTypes = {
    blogPost: PropTypes.shape({
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostPreview;
