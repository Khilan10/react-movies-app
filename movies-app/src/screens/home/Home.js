import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Header from '../../common/header/Header'
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Details from '../../screens/details/Details';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem',
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListReleasedMovies: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        //margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {
    constructor() {
        super();
        this.state = {
            moviename: "",
            genres: [],
            artists: []
        }
    }
    movieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
    }
    genreSelectedHandler = (e) => {
        this.setState({ genres: e.target.value });
    }
    artistSelectedHandler = (e) => {
        this.setState({ artists: e.target.value });
    }
    movieClickHandler = (movieId) => {
        ReactDOM.render(<Details movieId={movieId} />, document.getElementById('root'));
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={4} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movies => (
                        <GridListTile key={movies.id}>
                            <img src={movies.poster_url} className="movies-poster" alt={movies.title} />
                            <GridListTileBar title={movies.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cols={4} cellHeight={350} className={classes.gridListReleasedMovies}>
                            {moviesData.map(movies => (
                                <GridListTile onClick={() => this.movieClickHandler(movies.id)} key={"grid:" + movies.id} className="movies-poster-released" >
                                    <img src={movies.poster_url} alt={movies.title} className="movie-poster" />
                                    <GridListTileBar title={movies.title} subtitle={<span>Release Date: {new Date(movies.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movies Name</InputLabel>
                                    <Input id="moviename" moviename={this.state.moviename} onChange={this.movieNameChangeHandler}></Input>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectedHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectedHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="start-date" label="Release Date Start" type="date" defaultValue="" InputLabelProps={{ shrink: true }}></TextField>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="end-date" label="Release Date End" type="date" defaultValue="" InputLabelProps={{ shrink: true }}></TextField>
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.formControl}>
                                    <Button variant="contained"
                                        color="primary">APPLY</Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);
