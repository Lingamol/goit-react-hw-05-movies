import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { LinkItem } from './App.styled';

export const App = () => {
  return (
    <div>
      <nav>
        <LinkItem to="/" end>
          Home
        </LinkItem>

        <LinkItem to="/movies">Moveis</LinkItem>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />{' '}
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
