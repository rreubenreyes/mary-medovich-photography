/* eslint-disable react/jsx-indent-props */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import PostPreview from './post-preview';

const MorePosts = ({ exclude: id }) => (
    <StaticQuery
        query={graphql`
            query BlogPosts {
                gcms {
                    blogPosts(orderBy: createdAt_DESC) {
                        id
                        title
                        createdAt
                        updatedAt
                    }
                }
            }
        `}
        render={data => {
            const { blogPosts } = data.gcms;

            return blogPosts
                .filter(post => post.id !== id)
                .map(post => <PostPreview key={post.id} blogPost={post} />);
        }}
    />
);

MorePosts.propTypes = {
    exclude: PropTypes.string.isRequired,
};

export default MorePosts;
