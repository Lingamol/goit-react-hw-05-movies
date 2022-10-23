import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDataById } from 'services/api';
import {
  Container,
  CardWrapper,
  ActorName,
  ActorCharacter,
  CardImg,
} from './Cast.styled';
// import { Link } from 'react-router-dom';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
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
          setMovieCast(
            data.cast.map(({ profile_path, name, character }) => {
              return {
                poster: profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : placeHolder,
                name,
                character,
              };
            })
          );
          // console.log('setmovieCast', data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return movieCast.length > 0 ? (
    <Container>
      {movieCast.map(({ poster, name, character }) => {
        return (
          <CardWrapper key={name}>
            <CardImg src={poster} alt={name} />
            <ActorName>{name}</ActorName>
            <ActorCharacter>Character: {character}</ActorCharacter>
          </CardWrapper>
        );
      })}
    </Container>
  ) : (
    <p>We don't have any information about actors...</p>
  );
};
export default Cast;
