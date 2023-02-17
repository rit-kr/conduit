import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Header(props) {
  const navigate = useNavigate();
  // const handleLogOut = () => {
  //   localStorage.clear();
  //   navigate('/login')
  // }
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Conduit</Navbar.Brand>
          <Nav className="me-auto">

            <NavLink className='px-4' to="/">Home</NavLink>
            {
              localStorage.getItem('userInfo')
                ?
                <>
                  <NavLink className='px-4' to="/add">Add product</NavLink>
                  <NavLink className='px-4' to="/update">Update Product</NavLink>
                </>
                :
                <>
                  <NavLink className='px-4' to="/login">Sign in</NavLink>
                  <NavLink className='px-4' to="/register">Sign up</NavLink>
                </>
            }
          </Nav>
          <Nav>
            {
              localStorage.getItem('userInfo')
                ? <>
                  <NavDropdown title="username">
                    <NavDropdown.Item onClick={props.removeUser}>LogOut</NavDropdown.Item>
                  </NavDropdown>
                </>
                : null

            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}