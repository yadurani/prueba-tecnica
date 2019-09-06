import React, { Component } from 'react';
import MovieItem from '../../item/MovieItem';
import { Container, Row, Col } from 'react-bootstrap';
import { DiscoverContent } from './style.js';

class MovieList extends Component {
  render() {
    return (
      <DiscoverContent>
        <Container className="wrapper py-4">
          <Row>
            <Col>
              <h1>{this.props.title}</h1>
            </Col>
          </Row>
          <Row>
            {this.props.list.map(movie => {
              return (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                  popularity={movie.popularity}
                  overview={movie.overview}
                />
              );
            })}
          </Row>
        </Container>
      </DiscoverContent>
    );
  }
}

export default MovieList;
