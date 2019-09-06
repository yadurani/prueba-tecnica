import React, { Component } from 'react';
import { API_KEY, PATH_BASE, PATH_MOVIE } from '../api';
import ListMovie from '../components/section/ListMovie';
import Preloader from '../components/element/Preloader';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: false
    };
  }
  componentDidMount() {
    this.fetchMovies(this.props.section);
  }
  fetchMovies = async section => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        `${PATH_BASE}${PATH_MOVIE}${section}?api_key=${API_KEY}`
      );
      const data = await response.json();
      this.setState({ movie: data.results, loading: false });
    } catch (error) {}
  };xº

  render() {
    if (this.state.loading) {
      return <Preloader />;
    }
    return <ListMovie title={this.props.title} list={this.state.movie} />;
  }
}

export default Category;
