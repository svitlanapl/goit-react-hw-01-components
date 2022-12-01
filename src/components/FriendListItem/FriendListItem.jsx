import { Avatar } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class="item">
            <span>{isOnline}</span>
            <Avatar
                src={avatar}
                alt="User avatar"
                width="48" />
            <p>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string,
}