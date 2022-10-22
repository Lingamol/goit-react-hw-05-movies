// Imports
import { Outlet } from 'react-router-dom';
import { Link, Container, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
          {/* <NavLink to="/products">Products</NavLink> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
