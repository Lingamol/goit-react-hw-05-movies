import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { NavWrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
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
