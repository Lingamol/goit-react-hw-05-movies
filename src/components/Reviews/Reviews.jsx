import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataById } from 'services/api';
import { ReviewsList } from './Reviews.styled';
const Reviews = () => {
  const [movieReviews, setmovieReviews] = useState([]);
  const { movieId } = useParams();
  // console.log('movieId in reviews', movieId);

  useEffect(() => {
    async function fetchMovieReviews() {
      const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
      const API_PARAMS = {
        api_key: 'ec8ea0b4348914be2279bac7c8ca37c4',
        language: 'en-US',
        page: 1,
      };
      try {
        const data = await fetchDataById(URL, API_PARAMS);
        if (data) {
          setmovieReviews(
            data.results.map(({ author_details, content }) => ({
              author: author_details.username,
              content: content,
            }))
          );
          // console.log('setmovieReviews', data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(({ author, content }, index) => {
            return (
              <li key={index}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie. You can be first</p>
      )}
    </>
  );
};
export default Reviews;
