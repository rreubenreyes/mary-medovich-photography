import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const MockPhotoComponent = ({ photo }) => {
    const {
 title, location, description, tags,
} = photo;

    return (
        <div className="homepage__div--photo-container">
            <p>{title}</p>
            <p>
                {location.latitude}
{' '}
{location.longitude}
            </p>
            <p>{description.markdown}</p>
            <p>{tags.name}</p>
        </div>
    );
};

MockPhotoComponent.propTypes = {
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

const IndexPage = ({ data }) => {
    const {
        gcms: { photos },
    } = data;

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
                <Image />
            </div>
            <div className="homepage__div--photos-container">
                {photos.map(photo => (
                    <MockPhotoComponent key={photo.id} photo={photo} />
                ))}
            </div>

            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export const allPhotosQuery = graphql`
    query MyQuery {
        gcms {
            photos(orderBy: updatedAt_DESC) {
                title
                location {
                    latitude
                    longitude
                }
                description {
                    markdown
                }
                tags {
                    name
                }
                description {
                    raw
                    html
                    markdown
                    text
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        gcms: PropTypes.object.isRequired,
    }).isRequired,
};

export default IndexPage;
