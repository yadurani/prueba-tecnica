import React, { Component } from 'react';
import { PATH_BASE, PATH_MOVIE, API_KEY } from '../api';
import Detail from '../components/section/Detail';
import Preloader from '../components/element/Preloader';
export class DetailsPost extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      movie: [],
      video: [],
      team: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const MOVIE_ID = this.props.match.params.id;
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `${PATH_BASE}${PATH_MOVIE}/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
      const movie = await response.json();
      this.setState({
        movie: movie,
        video: movie.videos.results[0],
        team: movie.credits.crew.slice(0, 6),
        loading: false
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Preloader />;
    }
    return (
      <Detail
        movie={this.state.movie}
        video={this.state.video}
        team={this.state.team}
      />
    );
  }
}
export default DetailsPost;
