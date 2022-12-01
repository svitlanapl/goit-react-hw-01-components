import { PropTypes } from 'prop-types';
// import { Title, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2 class="title">Upload stats</h2>
      <ul>{stats.map(({ id, label, percentage }) => {
        return (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        )
      })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};