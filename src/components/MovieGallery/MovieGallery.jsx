import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  NavLinkItem,
  CardWrapper,
  Container,
  MovieName,
} from './MovieGallery.styled';

const MovieGallery = ({ movieList, pathLocation }) => {
  const location = useLocation();
  return (
    <Container>
      {movieList.map(({ id: movieId, original_title, poster_path: path }) => {
        const poster_path = path ? path : 'uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
        return (
          <CardWrapper key={movieId}>
            <NavLinkItem
              to={`${pathLocation}${movieId}`}
              state={{ from: location }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="{original_title}"
              />
              <MovieName>{original_title}</MovieName>
            </NavLinkItem>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
export default MovieGallery;

MovieGallery.propTypes = {
  pathLocation: PropTypes.string.isRequired,
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
