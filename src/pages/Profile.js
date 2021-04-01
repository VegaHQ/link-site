import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import NavbarVhq from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Spotlight from '../components/Spotlight.js';

// Logo of VegaHQ
import logo_bg from '../assets/img/logo_bg.png';

// Pictures of team members
import aiken from '../assets/img/teampics/aiken.jpg';
import gasper from '../assets/img/teampics/gasper.jpg';
import gregor from '../assets/img/teampics/gregor.jpg';


class Landing extends React.Component {
  render() {
    return (
      <>
        <NavbarVhq />

        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-default">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        VegaHQ{" "}
                        <span>a lot of things</span>
                      </h1>
                      <p className="lead text-white">
                        VegaHQ is a group of enthusiastic students/developers,
                        just having fun and trying to make something out of themselves.
                        Listen to our podcast, which can be found by clicking on the Twitch item.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>

              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-music" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Music
                          </h6>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://soundcloud.com/vega-hq/"
                            target="_blank"
                          >
                            Check it out
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-cart" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Merchandise
                          </h6>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://vegahq.creator-spring.com/"
                            target="_blank"
                          >
                            Check it out
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-instagram" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            RnD
                          </h6>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://orb.si/"
                            target="_blank"
                          >
                            Check it out
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section>
            <Spotlight/>
          </section>
          
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The Team</h2>
                  <p className="lead text-muted">
                    The amazing team that made all of this possible
                    and is running the entire operation.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={ aiken }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Aiken Tine Ahac</span>
                        <small className="h6 text-muted">CEO & Founder</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="https://github.com/aikenahac"
                          target="_blank"
                        >
                          <i className="fa fa-github" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="https://twitter.com/AikenAhac"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="https://www.instagram.com/ahacaiken/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={ gasper }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Gašper Dobrovoljc</span>
                        <small className="h6 text-muted">
                          CTO & Co-Founder
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="https://github.com/gapidobri"
                          target="_blank"
                        >
                          <i className="fa fa-github" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="https://twitter.com/gapi_dev"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="https://www.instagram.com/gasper.db/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={ gregor }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Gregor Kunc</span>
                        <small className="h6 text-muted">Content Manager</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="https://twitter.com/kunc_gregor"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="https://www.instagram.com/kunc.gregor/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={logo_bg}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Luka Golob</span>
                        <small className="h6 text-muted">Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="https://github.com/Golobii"
                          target="_blank"
                        >
                          <i className="fa fa-github" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="https://twitter.com/Lukcc2"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="https://www.instagram.com/lukasb_ass/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>

              </Row>
            </Container>
          </section>
          <Footer/>
        </main>
      </>
    );
  }
}

export default Landing;
