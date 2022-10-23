// Imports
import Loader from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkItem, Container, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <LinkItem to="/" end>
            Home
          </LinkItem>
          <LinkItem to="movies">Movies</LinkItem>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
