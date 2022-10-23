import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchDayMovies } from 'services/api';
import { NavLinkItem, CardWrapper, Container, MovieName } from './Home.styled';

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
      {/* <p>Home</p> */}
      <Container>
        {dayMovies.map(({ id: movieId, original_title, poster_path }) => (
          <CardWrapper key={movieId}>
            <NavLinkItem to={`movies/${movieId}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="{original_title}"
              />
              <MovieName>{original_title}</MovieName>
            </NavLinkItem>
          </CardWrapper>
        ))}
      </Container>
    </>
  );
};
export default Home;
