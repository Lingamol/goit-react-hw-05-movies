import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { fetchDataById } from 'services/api';
import {
  Container,
  CardWrapper,
  ActorName,
  ActorCharacter,
  CardImg,
} from './Cast.styled';
import Filter from 'components/Filter';
// import { Link } from 'react-router-dom';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const [searchParams, setsearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';
  console.log('searchParams.get(filter)', searchParams.get('filter'));
  console.log('searchParams.get(query)', searchParams.get('query'));
  console.log('searchParams from cast', searchParams);
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
  const onChange = value => {
    setsearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleActors = useMemo(() => {
    const normalizedFilter = filterParam.toLocaleLowerCase();
    return movieCast.filter(actor =>
      actor.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filterParam, movieCast]);

  return movieCast.length > 0 ? (
    <>
      <Filter onChange={onChange} filter={filterParam} />
      <Container>
        {visibleActors.map(({ poster, name, character }) => {
          return (
            <CardWrapper key={name}>
              <CardImg src={poster} alt={name} />
              <ActorName>{name}</ActorName>
              <ActorCharacter>Character: {character}</ActorCharacter>
            </CardWrapper>
          );
        })}
      </Container>
    </>
  ) : (
    <p>We don't have any information about actors...</p>
  );
};
export default Cast;
