import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moviesData from '../../common/moviesData';
import Header from '../../common/header/Header';
import './Details.css';
import Typography from '@material-ui/core/Typography';
import Home from '../home/Home';
import Youtube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movies: {},
            starIcons: [{
                id: 1,
                stateId: "star1",
                color: "black"
            },
            {
                id: 2,
                stateId: "star2",
                color: "black"
            },
            {
                id: 3,
                stateId: "star3",
                color: "black"
            },
            {
                id: 4,
                stateId: "star4",
                color: "black"
            },
            {
                id: 5,
                stateId: "star5",
                color: "black"
            }]
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
    backToHomeHandler() {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    artistClickHandler = (url) => {
        window.location = url;
    }
    starClickHandler = (starId) => {
        var starIconsList = [];
        for (let star of this.state.starIcons) {
            if (star.id <= starId) {
                star.color = "yellow";
            } else {
                star.color = "black";
            }
            starIconsList.push(star);
        }
        this.setState({ starIcons: starIconsList });
    }
    render() {
        let movie = this.state.movies;
        const opts = {
            length: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details"><Header showBookShowButton="true" />
                <div className="back" onClick={this.backToHomeHandler}>
                    &#60; Back to Home
            </div>
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
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer:</span></Typography>
                            <Youtube videoId={movie.trailer_url.split('?v=')[1]} opts={opts} onReady={this._onReady}></Youtube>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <Typography><span className="bold">Rate this movie:</span></Typography>
                        <div>
                            {this.state.starIcons.map(star => (
                                <StarBorderIcon
                                    className={star.color}
                                    key={"star" + star.id}
                                    onClick={() => this.starClickHandler(star.id)}
                                />
                            ))}
                        </div>
                        <div className="bold marginBottom16 marginTop16">
                            <Typography><span className="bold">Artists:</span></Typography>
                        </div>
                        <div className="bold marginBottom16 marginTop16">
                            <GridList cellHeight={160} cols={2}>
                                {movie.artists != null && movie.artists.map(art => (
                                    <GridListTile className="gridTile" key={"artists" + art.id} onClick={() => this.artistClickHandler(art.wiki_url)}>
                                        <img src={art.profile_url} alt={art.first_name + " " + art.last_name} className="artist-poster" />
                                        <GridListTileBar title={art.first_name + " " + art.last_name} />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Details;