import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { theme } from 'utils/theme';
import { Head, Column, Raw } from 'components/TransactionHistory/TransactionHistori.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      color="grey"
      bg={theme.colors.bgLight}
      boxShadow="primary"
      borderRadius={theme.radii.lg}
      width="1"
      padding={2}
    >
      <Box as="table" textAlign="center">
        <Head>
          <tr>
            <Column>Type</Column>
            <Column>Amount</Column>
            <Column>Currence</Column>
          </tr>
        </Head>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Raw key={id}>
              <Column as="td"> {type}</Column>
              <Column as="td"> {amount}</Column>
              <Column as="td"> {currency}</Column>
            </Raw>
          ))}
        </tbody>
      </Box>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
