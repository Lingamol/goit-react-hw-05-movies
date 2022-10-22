// import PropTypes from 'prop-types';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { useState, useEffect, useMemo } from 'react';

import {
  SearchForm,
  FormInput,
  FormErrorMessage,
  SearchBarWrapper,
  FormBtn,
  SvgBtn,
  NavLinkItem,
} from './Movies.styled';
import * as yup from 'yup';
import { fetchMovies } from 'services/api';

const Movies = () => {
  const initialValues = {
    search: '',
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query: paramQuery } = params;
  const [query, setQuery] = useState(paramQuery ? paramQuery : '');
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  // useEffect(
  //   () => async () => {
  //     if (searchParams.get('query')) {
  //       console.log('first');
  //       try {
  //         console.log('fetch start');
  //         const response = await fetchMovies(searchParams.get('query'));
  //         if (response) {
  //           setMovieList(response.results);
  //           console.log('setMovieList', response.results);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   },
  //   [searchParams]

  // );

  useEffect(() => {
    // Тут выполняем асинхронную операцию,
    // например HTTP-запрос за информацией о пользователе
    if (query === '') return;

    async function fetchMoviesList() {
      try {
        const response = await fetchMovies(query);
        if (response) {
          setMovieList(response.results);
          console.log('setMovieList', response.results);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMoviesList();
  }, [query]);

  const schema = yup.object().shape({
    search: yup
      .string()
      .max(20)
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Search may contain only letters, apostrophe, dash and spaces. '
      )
      .required(),
  });
  // const fetchByName = async () => {
  //   const { query } = params;
  //   if (query) {
  //     try {
  //       console.log('fetch start', query);
  //       const response = await fetchMovies(query);
  //       if (response) {
  //         setMovieList(response.results);
  //         console.log('setMovieList', response.results);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  const onSubmitForm = (values, { resetForm }) => {
    console.log('values', values);
    //   console.log('actions', actions);
    const { search } = values;
    setSearchParams({ query: search });
    setQuery(search);
    resetForm();
  };

  return (
    <div>
      <SearchBarWrapper className="searchbar">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmitForm}
          // onChange={onChangeForm}
        >
          <SearchForm className="form">
            <FormBtn
              type="submit"
              // disabled={isSubmitting}
              className="button"
              aria-label="Search"
            >
              <SvgBtn />
            </FormBtn>
            <FormInput
              className="input"
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
            <ErrorMessage name="search" component={FormErrorMessage} />
          </SearchForm>
        </Formik>
      </SearchBarWrapper>
      {movieList.length > 0 && (
        <ul>
          {movieList.map(({ id: movieId, original_title }) => (
            <li key={movieId}>
              <NavLinkItem
                to={`${movieId}`}
                search={{ querySerch: `query=${query}` }}
                state={{ from: location }}
              >
                {original_title}
              </NavLinkItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  // paginationMode: PropTypes.string.isRequired,
  // isSubmitting: PropTypes.bool.isRequired,
  // radioBtnChange: PropTypes.func.isRequired,
};
