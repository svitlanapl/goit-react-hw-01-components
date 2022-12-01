import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))} 
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};




// // import { Box } from 'components/Box';
// import { Head, Column, Raw } from './TransactionHistory.styled';
// // import { theme } from 'utils';

// export const TransactionHistory = ({ transactions }) => {
//   return (
//     <Box
//       color="grey"
//       bg={theme.colors.bgLight}
//       boxShadow="primary"
//       borderRadius={theme.radii.lg}
//       width="1"
//       padding={2}
//     >
//       <Box as="table" textAlign="center">
//         <Head>
//           <tr>
//             <Column>Type</Column>
//             <Column>Amount</Column>
//             <Column>Currence</Column>
//           </tr>
//         </Head>
//         <tbody>
//           {transactions.map(({ id, type, amount, currency }) => (
//             <Raw key={id}>
//               <Column as="td"> {type}</Column>
//               <Column as="td"> {amount}</Column>
//               <Column as="td"> {currency}</Column>
//             </Raw>
//           ))}
//         </tbody>
//       </Box>
//     </Box>
//   );
// };
// 