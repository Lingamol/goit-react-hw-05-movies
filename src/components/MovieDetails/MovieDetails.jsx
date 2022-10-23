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
        const data = await fetchMoviesById(movieId);
        if (data) {
          setSelectedMovie({
            poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            title: data.title,
            score: Number.parseInt(data.vote_average * 10),
            overview: data.overview,
            genres: data.genres
              .reduce((acc, genre) => (acc += genre.name + ' '), '')
              .trim(),
          });
          console.log('setSelectedMovie', data);
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
  const { poster, title, score, overview, genres } = selectedMovie;
  return (
    <>
      <div>MovieDetails</div>
      <Link to={backLinkHref}>Go back </Link>
      <div>
        <img src={poster} alt={title} width="240" height="320" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>User Score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <p>Additional information </p>
      <NavWrapper>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
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
