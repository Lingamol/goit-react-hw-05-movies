import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  BtnBack,
  BtnText,
  NavWrapper,
  SvgBtn,
  Title,
  SecondaryNavItem,
  SecondaryNavLink,
  NavTitle,
} from './MovieDetails.styled';
import { fetchMoviesById } from 'services/api';
import { useState, useEffect, Suspense } from 'react';
import Loader from 'components/Loader';
import MovieDetailsCard from 'components/MovieDetailsCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log('movieId', movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';
  const [selectedMovie, setSelectedMovie] = useState(null);

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
          // console.log('setSelectedMovie', data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchSelectedMovie();
  }, [movieId]);

  return (
    <>
      <Title>Movie details</Title>
      <BtnBack to={backLinkHref}>
        <SvgBtn />
        <BtnText> Go back</BtnText>
      </BtnBack>
      {selectedMovie && <MovieDetailsCard selectedMovie={selectedMovie} />}
      <NavTitle>Additional information </NavTitle>
      <NavWrapper>
        <SecondaryNavItem>
          <SecondaryNavLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </SecondaryNavLink>
        </SecondaryNavItem>
        <li>
          <SecondaryNavLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </SecondaryNavLink>
        </li>
      </NavWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
