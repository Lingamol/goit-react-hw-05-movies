import { DetailsCard, DetailsPoster } from './MovieDetailsCard.styled';
import PropTypes from 'prop-types';
const MovieDetailsCard = ({ selectedMovie }) => {
  const { poster, title, score, overview, genres } = selectedMovie;
  return (
    <DetailsCard>
      <DetailsPoster>
        <img src={poster} alt={title} width="240" height="320" />
      </DetailsPoster>
      <div>
        <h1>{title}</h1>
        <p>User Score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </DetailsCard>
  );
};
export default MovieDetailsCard;

MovieDetailsCard.propTypes = {
  selectedMovie: PropTypes.exact({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  }).isRequired,
};
