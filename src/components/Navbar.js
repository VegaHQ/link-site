import React from "react";

import logo from '../assets/img/logo_long.png'

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class NavbarVhq extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-dark bg-primary"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <img
                alt="VegaHQ Logo"
                src={ logo }
              />
            </NavbarBrand>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="https://vegahq.com">
                      <img
                        alt="VegaHQ Logo"
                        src={ logo }
                      />
                    </a>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-default"
                      data-toggle="collapse"
                      id="navbar-default"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
              <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    href="https://twitch.tv/vegahqslo"
                    role="button"
                    target="_blank"
                  >
                    Twitch
                  </NavLink>
                  <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    href="https://www.instagram.com/vega.hq/"
                    role="button"
                    target="_blank"
                  >
                    Instagram
                  </NavLink>
                  <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    href="https://www.youtube.com/channel/UC8wGcZ_LijXcNPHE379BorA"
                    role="button"
                    target="_blank"
                  >
                    YouTube
                  </NavLink>
                  <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    href="https://twitter.com/vega_hq"
                    role="button"
                    target="_blank"
                  >
                    Twitter
                  </NavLink>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarVhq;