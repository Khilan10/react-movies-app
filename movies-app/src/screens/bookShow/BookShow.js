import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../home/Home';
import Typography from '@material-ui/core/Typography'
import './BookShow.css';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BookShow extends Component {
    backToDetailsHandler() {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            showDate: "",
            showTime: ""
        }
    }
    locationChangeHandler = (event) => {
        this.setState({ location: event.target.value });
    }
    languageChangeHandler = (event) => {
        this.setState({ language: event.target.value });
    }
    showDateChangeHandler = (event) => {
        this.setState({ showDate: event.target.value });
    }
    showTimeChangeHandler = (event) => {
        this.setState({ showTime: event.target.value });
    }
    render() {
        return (
            <div>
                <Header />
                <div className="back-btn-container">
                    <Typography className="back" onClick={this.backToDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                    <Card className="cardStyle">
                        <CardContent variant="h2">
                            <Typography>
                                BOOK SHOW
                            </Typography><br />
                        </CardContent>
                        <FormControl className="formControl" required>
                            <InputLabel htmlFor="location"> Choose Location:</InputLabel>
                            <Select value={this.state.location} onChange={this.locationChangeHandler}>
                                {
                                    location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>

                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br /><br />
                        <FormControl className="formControl" required>
                            <InputLabel htmlFor="language"> Choose Langauge:</InputLabel>
                            <Select value={this.state.language} onChange={this.languageChangeHandler}>
                                {
                                    language.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>

                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br /><br />
                        <FormControl className="formControl" required>
                            <InputLabel htmlFor="showDate"> Choose Show Date:</InputLabel>
                            <Select value={this.state.showDate} onChange={this.showDateChangeHandler}>
                                {
                                    showDate.map(sd => (
                                        <MenuItem key={"sd" + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>

                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br /><br />
                        <FormControl className="formControl" required>
                            <InputLabel htmlFor="showTime"> Choose Show Time:</InputLabel>
                            <Select value={this.state.showTime} onChange={this.showTimeChangeHandler}>
                                {
                                    showTime.map(st => (
                                        <MenuItem key={"st" + st.id} value={st.showTime}>
                                            {st.showTime}
                                        </MenuItem>

                                    ))
                                }
                            </Select>
                        </FormControl>
                        <br /><br />
                    </Card>
                </div>
            </div>
        );
    }
}
export default BookShow;