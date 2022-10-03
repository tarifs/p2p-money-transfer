import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SignInModal from "../auth/SignInModal";
import Logout from "../auth/Logout";
import AppStorage from "../../service/AppStorage";

function TopNavBar(props) {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState({});

  const afterLogout = () => {
    setUser({});
  };

  const afterSignIn = (user) => {
    setUser(user);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!AppStorage.getToken()) {
        setUser({});
      } else {
        setUser(AppStorage.getUser());
      }
    }
  }, [typeof window !== "undefined"]);

  return (
    <>
      <Navbar className="nav" variant="dark" style={props.style}>
        <Container>
          <Navbar.Brand href="/">
            <Link href="/" passHref>
              <h1 className="text-dark">P2P Money Transfer</h1>
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <div
              className={
                "nav-icons d-flex align-items-center " +
                (mobileMenu ? "nav-icons-show" : "nav-icons-hide")
              }>
              <Nav>
                <NavDropdown
                  title={<i className="bi bi-person-circle" />}
                  id="nav-dropdown">
                  {(!user || !Object.keys(user).length) && (
                    <>
                      <NavDropdown.Item onClick={() => setLoginModalShow(true)}>
                        <a href="#">Sign in</a>
                      </NavDropdown.Item>
                    </>
                  )}
                  {user && Object.keys(user).length > 0 && (
                    <>
                      <Link
                        className="text-danger"
                        href={`/user/dashboard`}
                        passHref>
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </Link>
                      <Logout afterLogout={afterLogout} />
                    </>
                  )}
                </NavDropdown>
              </Nav>
            </div>
            <i
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className="bi bi-three-dots-vertical mobile-menu"
            />
          </Nav>
        </Container>
      </Navbar>
      <SignInModal
        afterSignIn={afterSignIn}
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
      <div className="py-2 bg-primary"></div>
    </>
  );
}

export default TopNavBar;
