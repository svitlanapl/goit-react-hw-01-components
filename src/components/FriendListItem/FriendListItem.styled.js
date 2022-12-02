import { PropTypes } from 'prop-types';
import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${p => p.theme.sizes.xl};
  height: ${p => p.theme.sizes.xl};
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.primaryDark};
  p: ${p => p.theme.sizes.xl};
  box-shadow: ${p => p.theme.shadows.primary};
  margin-right: ${p => p.theme.sizes.m};
`;

export const Status = styled.span`
  width: ${p => p.theme.sizes.m};
  height: ${p => p.theme.sizes.m};
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.sizes.m};
  background-color: ${p =>
    p.isOnline
      ? p.theme.colors.bgStatusOnline
      : p.theme.colors.bgStatusOffline};
`;

export const FriendName = styled.p`
  font-size: ${ p => p.theme.fontSizes.l};
  color: ${p =>p.theme.colors.accent};
`;

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
};

Status.propTypes = {
    isOnline: PropTypes.bool.isRequired,
};