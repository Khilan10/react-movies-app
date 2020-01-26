import React, { Component } from 'react';
import moviesData from '../../common/moviesData';
import Header from '../../common/header/Header';
import './Details.css';
import Typography from '@material-ui/core/Typography';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movies: {}
        }
    }
    componentWillMount() {
        let currentState = this.state;
        currentState.movies = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }
    render() {
        let movie = this.state.movies;
        return (
            <div className="details"><Header />
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title}></img>
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="h4" className="bold">{movie.title} </Typography>
                        </div>
                        <br />
                        <div>
                            <Typography>
                                <span className="bold">Genres:</span>{movie.genres.join(',')}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Duration:</span>{movie.duration}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Release Date:</span>{new Date(movie.release_date).toDateString()}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Rating:</span>{movie.critics_rating}
                            </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography>
                                <span className="bold">Plot:</span><a href={movie.wiki_url}>(Wiki Link)</a>
                                {movie.storyline}
                            </Typography>
                        </div>
                    </div>
                    <div className="rightDetails">

                    </div>
                </div>
            </div>
        )
    }
}
export default Details;