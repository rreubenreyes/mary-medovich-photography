/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const OtherPosts = ({ data }) => {
    const {
        blogPost: { title, content, createdAt, updatedAt },
    } = data.gcms;

    return (
        <div className="blog-post">
            <h1 className="blog-post__h1--title">{title}</h1>
            <p>{createdAt}</p>
            <p>{updatedAt || 'new post'}</p>
            <p>{content.markdown}</p>
        </div>
    );
};

BlogPostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MorePosts;

export const blogPostQuery = graphql`
    query OtherBlogPosts($id: ID!) {
        gcms {
            blogPost(where: { id: $id }) {
                title
                content {
                    markdown
                }
                createdAt
                updatedAt
            }
        }
    }
`;
