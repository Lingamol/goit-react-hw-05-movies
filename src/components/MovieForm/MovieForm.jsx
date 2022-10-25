import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  FormInput,
  FormErrorMessage,
  SearchBarWrapper,
  FormBtn,
  SvgBtn,
} from './MovieForm.styled';

const MovieForm = ({ setSearchParams, setQuery, query }) => {
  const initialValues = {
    search: query !== {} ? query : '',
  };
  // const [initialValues, setInitialValues] = useState();
  const onSubmitForm = (values, { resetForm }) => {
    console.log('values', values);
    //   console.log('actions', actions);
    const { search } = values;
    setSearchParams({ query: search });
    setQuery(search);
    // resetForm();
  };
  // useEffect(() => {
  //   setInitialValues({
  //     search: query ? query : '',
  //   });
  // }, [query]);

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

  return (
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
  );
};
export default MovieForm;

MovieForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};
