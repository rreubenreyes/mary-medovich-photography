import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Photo from '../components/photo';

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
                    <Photo key={photo.id} photo={photo} />
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
                photograph {
                    handle
                    width
                    height
                }
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
