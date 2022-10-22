import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { fetchDayMovies } from 'services/api';
// import useDayMovie from 'hooks/dayMovie';
// import { Outlet } from 'react-router-dom';
import { NavLinkItem } from './Home.styled';

const Home = () => {
  // const [dayMovies, setDayMovies] = useDayMovie('day', []);
  // // const [movies, setMovies] = useState([
  // //   { id: 1, title: 123 },
  // //   { id: 2, title: 1234 },
  // // ]);
  const [dayMovies, setDayMovies] = useState([]);
  useEffect(
    () => async () => {
      try {
        // console.log('fetch start');
        const response = await fetchDayMovies();
        if (response) {
          setDayMovies(response.results);
          console.log(response.results);
        }
      } catch (error) {
        console.log(error);
      }
      // setError(error);
      // } finally {
      //   console.log('fetch finish', response.results);
      //   return response.results ?? defaultValue;
      // }
    },
    []
  );
  return (
    <>
      <ul>
        {dayMovies.map(({ id: movieId, original_title }) => (
          <li key={movieId}>
            <NavLinkItem to={`movies/${movieId}`}>{original_title}</NavLinkItem>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
