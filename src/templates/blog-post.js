/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const BlogPostTemplate = ({ pageContext }) => {
    const { content, createdAt, updatedAt } = pageContext;

    return (
        <div className="blog-post">
            <h1 className="blog-post__h1--title">title</h1>
            <p>{createdAt}</p>
            <p>{updatedAt || 'new post'}</p>
            <p>{content.markdown}</p>
        </div>
    );
};

BlogPostTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
};

export default BlogPostTemplate;
