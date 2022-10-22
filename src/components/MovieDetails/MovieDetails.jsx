import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { NavWrapper } from './MovieDetails.styled';
import { fetchMoviesById } from 'services/api';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    async function fetchSelectedMovie() {
      try {
        const response = await fetchSelectedMovie(movieId);
        if (response) {
          setSelectedMovie(response.results);
          console.log('setMovieList', selectedMovie);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchSelectedMovie();
  }, [movieId]);
  // console.log('location ', location);
  // console.log('location.state', location.state);
  // console.log('backLinkHref', backLinkHref);
  return (
    <>
      <div>MovieDetails</div>
      <Link to={backLinkHref}>Back </Link>
      <p>Additional information </p>
      <NavWrapper>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </NavWrapper>
      <Outlet />
      {/* <NavWrapper>
        <Link to={'/cast'}>Cast</Link>
        <Link to={'/reviews'}>Reviews</Link>
      </NavWrapper>
      <Outlet /> */}
    </>
  );
};
export default MovieDetails;
