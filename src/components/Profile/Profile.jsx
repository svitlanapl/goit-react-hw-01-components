import PropTypes from 'prop-types';
import { Avatar, Name, Social, Location, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div>
            <div>
                <Avatar
                src={avatar}
                alt="User avatar"
                />
                <Name>{username}</Name>
                <Social>{tag}</Social>
                <Location>{location}</Location>
            </div>
            <ul>
                <li>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </li>
                <li>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </li>
                <li>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </li>
            </ul>
        </div>
    )
 };

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
};