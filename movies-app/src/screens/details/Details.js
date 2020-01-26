import React, { Component } from 'react';
import moviesData from '../../common/moviesData';
import Header from '../../common/header/Header';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movies: {}
        }
    }
    componentDidMount() {
        let currentState = this.state;
        currentState.movies = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }
    render() {
        return (
            <div className="details"><Header />
                <div className="flex-containerDetails">
                    <div className="leftDetails">

                    </div>
                    <div className="middleDetails">

                    </div>
                    <div className="rightDetails">

                    </div>
                </div>
            </div>
        )
    }
}
export default Details;