import React from 'react';
import PropTypes from 'prop-types';

const PostPreview = ({ blogPost }) => {
    const { title, createdAt } = blogPost;
    return (
        <>
            <h4 className="post-preview--h4__title">{title}</h4>
            <span className="post-preview--span__published">
                Published on
                {createdAt}
            </span>
        </>
    );
};

PostPreview.propTypes = {
    blogPost: PropTypes.shape({
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostPreview;
