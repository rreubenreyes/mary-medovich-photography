/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MorePosts from './components/more-posts';

const BlogPostTemplate = ({ data, pageContext }) => {
    const {
        blogPost: { title, content, createdAt, updatedAt },
    } = data.gcms;

    const { id } = pageContext;

    return (
        <div className="blog-post">
            <h1 className="blog-post__h1--title">{title}</h1>
            <p>{createdAt}</p>
            <p>{updatedAt || 'new post'}</p>
            <p>{content.markdown}</p>
            <MorePosts exclude={id} />
        </div>
    );
};

BlogPostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export const blogPostQuery = graphql`
    query SingleBlogPost($id: ID!) {
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

export default BlogPostTemplate;
