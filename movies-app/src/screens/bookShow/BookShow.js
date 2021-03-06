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
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Confirmation from '../confirmation/Confirmation';

class BookShow extends Component {
    backToDetailsHandler() {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    constructor() {
        super();
        this.state = {
            location: "",
            locationRequired: "dispNone",
            language: "",
            languageRequired: "dispNone",
            showDate: "",
            showDateRequired: "dispNone",
            showTime: "",
            showTimeRequired: "dispNone",
            tickets: 0,
            ticketsRequired: "dispNone",
            unitPrice: 500
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
    ticketChangeHandler = (event) => {
        this.setState({ tickets: event.target.value });
    }
    bookShowButtonHandler = () => {
        this.state.location === "" ? this.setState({ locationRequired: "dispBlock" }) : this.setState({ locationRequired: "dispNone" });
        this.state.language === "" ? this.setState({
            languageRequired:
                "dispBlock"
        }) : this.setState({ languageRequired: "dispNone" });
        this.state.showTime === "" ? this.setState({
            showTimeRequired:
                "dispBlock"
        }) : this.setState({ showTimeRequired: "dispNone" });
        this.state.showDate === "" ? this.setState({
            showDateRequired:
                "dispBlock"
        }) : this.setState({ showDateRequired: "dispNone" });
        this.state.tickets === 0 ? this.setState({
            ticketsRequired:
                "dispBlock"
        }) : this.setState({ ticketsRequired: "dispNone" })
        ReactDOM.render(<Confirmation bookingSummary={this.state} />, document.getElementById('root'));
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
                                <FormHelperText className={this.state.locationRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
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
                                <FormHelperText className={this.state.languageRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
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
                                <FormHelperText className={this.state.showDateRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
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
                                <FormHelperText className={this.state.showTimeRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl >
                            <br /><br />
                            <FormControl className="formControl" required>
                                <InputLabel htmlFor="tickets">Tickets:</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketChangeHandler}></Input>
                                <FormHelperText className={this.state.ticketsRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Typography>
                                Unit Price Rs. {this.state.unitPrice}
                            </Typography>
                            <br />
                            <Typography>
                                Total Price Rs. {this.state.tickets * this.state.unitPrice}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                BOOK SHOW
                        </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}
export default BookShow;