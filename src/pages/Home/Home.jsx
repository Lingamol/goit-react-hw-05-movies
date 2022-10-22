import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchDayMovies } from 'services/api';
import { NavLinkItem } from './Home.styled';

const Home = () => {
  const [dayMovies, setDayMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    console.log('mount home');
    // const fetchMovie = () => {
    //   fetchDayMovies()
    //     .then(data => {
    //       setDayMovies(data.results);
    //       console.log(data.results);
    //     })
    //     .catch(error => console.log(error));
    // };

    const fetchMovie = async () => {
      try {
        const response = await fetchDayMovies();
        if (response) {
          setDayMovies(response.results);
          console.log('setDayMovies:', response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
      <p>Home</p>
      <ul>
        {dayMovies.map(({ id: movieId, original_title }) => (
          <li key={movieId}>
            <NavLinkItem to={`movies/${movieId}`} state={{ from: location }}>
              {original_title}
            </NavLinkItem>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
