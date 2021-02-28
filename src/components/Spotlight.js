import React from "react";
import YouTube from 'react-youtube';

import {
  Container,
  Row,
  Col
} from "reactstrap";

class Spotlight extends React.Component {
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

    render() {
        const opts = {
          height: '540',
          width: '960',
          fluid: true,
          playerVars: {
            autoplay: 1,
          },
        };

        return (
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Spotlight</h2>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg="11">
                  <YouTube videoId="Z8MSdZdkbdQ" opts={ opts } onReady={ this._onReady }/>
                </Col>
              </Row>
            </Container>
        );
    }
}

export default Spotlight;