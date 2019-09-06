import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  titleURL = title => title.replace(/\W+/g, '-').toLowerCase();
  render() {
    return (
      <>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: '100%' }}>
            <Link
              to={`/movie/${this.props.id}-${this.titleURL(this.props.title)}`}
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
                  this.props.image
                }`}
                alt={this.props.title}
              />
            </Link>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default MovieItem;
