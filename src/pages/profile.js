import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

const Profile = ({ data }) => {
    const {
        gcms: {
            profile: { name, description, social },
        },
    } = data;

    return (
        <div class="profile">
            <span className="profile__span--name">{name}</span>
            <span className="profile__span--description">
                {description.markdown}
            </span>
            <span className="profile__span--social">{social}</span>
        </div>
    );
};

// TODO: Upload a profile picture
export const profileQuery = graphql`
    query ProfileQuery {
        gcms {
            profile(where: { id: "cjxjki0y2fm310a30rsr4safr" }) {
                name
                description {
                    markdown
                }
                social
            }
        }
    }
`;

Profile.propTypes = {
    data: PropTypes.shape({
        gcms: PropTypes.object.isRequired,
    }).isRequired,
};

export default Profile;
