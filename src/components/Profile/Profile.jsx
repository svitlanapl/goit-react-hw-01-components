import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar}
                alt="User avatar"
                class="avatar"
                />
                <p class={username}></p>
                <p class={tag}></p>
                <p class={location}></p>
            </div>
            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
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