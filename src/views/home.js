import React, { Component } from 'react';
import {
  API_KEY,
  PATH_BASE,
  PATH_MOVIE,
  PATH_DISCOVER,
  PATH_YEAR,
  PATH_VOTE_COUNT,
  PATH_PAGE
} from '../api';
import ListMovie from '../components/section/ListMovie';
import Preloader from '../components/element/Preloader';
import { Button, Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        results: []
      },
      loading: false,
      nextPage: 1
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        `${PATH_BASE}${PATH_DISCOVER}${PATH_MOVIE}?api_key=${API_KEY}&${PATH_PAGE}${
          this.state.nextPage
        }${PATH_VOTE_COUNT}${PATH_YEAR}&vote_average.gte=5
        &vote_average.lte=10&sort_by=vote_average.desc`
      );
      const data = await response.json();
      this.setState({
        data: {
          results: [].concat(this.state.data.results, data.results) // cargar anteriores y nuevos
        },
        loading: false,
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {}
  };
  pageMovies = () => {
    if (this.state.loading) {
      return <Preloader />;
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <Button onClick={() => this.fetchMovies()}>Load More</Button>
            </Col>
          </Row>
        </Container>
      );
    }
  };
  render() {
    return (
      <>
        <ListMovie title={this.props.title} list={this.state.data.results} />
        {this.pageMovies()}
      </>
    );
  }
}

export default Home;
