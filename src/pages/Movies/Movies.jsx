import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { MovieContainer } from './Movies.styled';
import { fetchMovies } from 'services/api';
import Loader from 'components/Loader';
import Button from 'components/Button';
import MovieForm from 'components/MovieForm';
import MovieGallery from 'components/MovieGallery';

const Movies = () => {
  const PATH = '';
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query: paramQuery } = params;
  const [query, setQuery] = useState(paramQuery ? paramQuery : '');
  const [movieList, setMovieList] = useState([]);
  // const location = useLocation();
  const [pageOnMovie, setPageOnMovie] = useState(1);
  const [totalPagesOnMovie, seTotalPages] = useState(0);
  const [isLoadingOnMovie, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') return;

    async function fetchMoviesList() {
      setIsLoading(true);
      try {
        const response = await fetchMovies(query, pageOnMovie);
        if (response) {
          const { results, total_pages } = response;
          if (pageOnMovie === 1) {
            setMovieList([...results]);
            seTotalPages(total_pages);
          } else {
            setMovieList(prevState => [...prevState, ...results]);
            seTotalPages(total_pages);
            console.log('setMovieList', results);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesList();
  }, [query, pageOnMovie]);

  function OnClickLoadMore() {
    setPageOnMovie(prev => prev + 1);
  }
  function onDisableLoadMore() {
    if (totalPagesOnMovie - pageOnMovie === 0) return true;
    else return false;
  }

  return (
    <MovieContainer>
      <MovieForm setQuery={setQuery} setSearchParams={setSearchParams} />
      {isLoadingOnMovie && <Loader />}
      {movieList.length > 0 && (
        <MovieGallery movieList={movieList} pathLocation={PATH} />
      )}
      {totalPagesOnMovie > 1 && (
        <Button
          onLoadMore={OnClickLoadMore}
          onDisableLoadMore={onDisableLoadMore}
        />
      )}
    </MovieContainer>
  );
};

export default Movies;
