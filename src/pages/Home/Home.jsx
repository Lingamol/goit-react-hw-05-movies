import GalleryPagination from 'components/GalleryPagination';
import Loader from 'components/Loader';
import MovieGallery from 'components/MovieGallery';
import { useState, useEffect } from 'react';
import { fetchDayMovies } from 'services/api';

const Home = () => {
  const PATH = 'movies/';
  const [dayMovies, setDayMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, seTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      try {
        const response = await fetchDayMovies();
        if (response) {
          const { results, total_pages } = response;
          console.log('results', results);
          setDayMovies(results);
          seTotalPages(total_pages);
          console.log('setDayMovies:', results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    // console.log('mount home');
    // const fetchMovie = () => {
    //   fetchDayMovies()
    //     .then(data => {
    //       setDayMovies(data.results);
    //       console.log(data.results);
    //     })
    //     .catch(error => console.log(error));
    // };

    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const response = await fetchDayMovies(page);
        if (response) {
          const { results, total_pages } = response;
          console.log('results', results);
          setDayMovies(results);
          seTotalPages(total_pages);
          console.log('setDayMovies:', results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [page]);

  return (
    <>
      {isLoading && <Loader />}
      <MovieGallery movieList={dayMovies} pathLocation={PATH} />
      {totalPages > 1 && (
        <GalleryPagination
          onPagination={setPage}
          countPages={totalPages}
          currentPage={page}
        />
      )}
    </>
  );
};
export default Home;
