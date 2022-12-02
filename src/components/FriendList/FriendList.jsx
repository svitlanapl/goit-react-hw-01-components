import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from 'components/FriendListItem';
import { theme } from 'utils';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gridGap={5}
      borderRadius={theme.radii.md}
      width={theme.sizes.xxxl}
    >
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};