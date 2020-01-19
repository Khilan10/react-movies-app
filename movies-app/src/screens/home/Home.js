import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header'
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/moviesData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
        width: '75%',
        transform: 'translateZ(0)',
        cursor: 'pointer'
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movies => (
                        <GridListTile key={movies.id}>
                            <img src={movies.poster_url} className="movies-poster" alt={movies.title} />
                            <GridListTileBar title={movies.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <div className="left">
                    <GridList cols={4} cellHeight={350} className={classes.gridListReleasedMovies}>
                        {moviesData.map(movies => (
                            <GridListTile key={movies.id} className="movies-poster-released" >
                                <img src={movies.poster_url} alt={movies.title} />
                                <GridListTileBar title={movies.title} subtitle={<span>Release Date: {new Date(movies.release_date).toDateString()}</span>}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);
