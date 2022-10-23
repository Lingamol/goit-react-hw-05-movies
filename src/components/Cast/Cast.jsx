import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDataById } from 'services/api';
// import { Link } from 'react-router-dom';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setmovieCast] = useState({});
  useEffect(() => {
    async function fetchMovieCast() {
      const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
      const API_PARAMS = {
        api_key: 'ec8ea0b4348914be2279bac7c8ca37c4',
        language: 'en-US',
      };
      try {
        const data = await fetchDataById(URL, API_PARAMS);
        if (data) {
          setmovieCast(
            data.cast.map(({ profile_path, name, character }) => {
              return {
                poster: profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : placeHolder,
                name: name,
                character: character,
              };
            })
          );
          console.log('setmovieCast', data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <ul>
      {movieCast.map(({ poster, name, character }) => {
        return (
          <li key={name}>
            <img src={poster} alt={name} width="180" height="240" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
