import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DetailContent } from './style.js';
import { Button, Modal, Container, Col, Row } from 'react-bootstrap';
import { PATH_POST, PATH_VIDEO } from '../../../api';

const Detail = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <DetailContent image={props.movie.backdrop_path}>
      <Container>
        <Row>
          <Col className="pb-3">
            <Link className="white--text" to="/">
              <i className="fas fa-arrow-left mr-2" /> Atras
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={5} lg={4}>
            <img
              src={`${PATH_POST}${props.movie.poster_path}`}
              alt={props.movie.title}
            />
            <span>{props.movie.vote_average}</span>
          </Col>
          <Col sm={12} md={7} lg={8}>
            <h2>{props.movie.title}</h2>
            <h4>Sinopsis</h4>
            <p>{props.movie.overview}</p>
            <h4>Equipo Destacado</h4>
            <div className="row detail__team">
              {props.team.map((team, index) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                    <h4>{team.name}</h4>
                    <p>{team.job}</p>
                  </div>
                );
              })}
            </div>
            {props.video && (
              <>
                <Button variant="primary" onClick={handleShow}>
                  <i className="fas fa-play" /> Ver Teaser
                </Button>

                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Body>
                    <Button variant="secondary" onClick={handleClose}>
                      <i className="fas fa-times" />
                    </Button>

                    <iframe
                      title={props.video.id}
                      width="100%"
                      height="500"
                      src={`${PATH_VIDEO}${props.video.key}?autoplay=1`}
                    />
                  </Modal.Body>
                </Modal>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </DetailContent>
  );
};

export default Detail;
