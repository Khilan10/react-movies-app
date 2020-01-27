import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookShow/BookShow';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ paddeing: 0, textAlign: "center" }} >
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            contact: "",
            contactRequired: "dispNone",
            regpassword: "",
            regpasswordRequired: "dispNone"

        }
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true });
    }
    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            contact: "",
            contactRequired: "dispNone",
            regpassword: "",
            regpasswordRequired: "dispNone"
        });

    }
    tabChangeHandler = (event, value) => {
        this.setState({
            value: value,
            modalIsOpen: true,
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            contact: "",
            contactRequired: "dispNone",
            regpassword: "",
            regpasswordRequired: "dispNone"
        });
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }
    inputFirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value });
    }
    inputLastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value });
    }
    inputEmailChangeHandler = (e) => {
        this.setState({ email: e.target.value });
    }
    inputContactChangeHandler = (e) => {
        this.setState({ contact: e.target.value });
    }
    inputRegpasswordChangeHandler = (e) => {
        this.setState({ regpassword: e.target.value });
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }
    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" });
        this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" });
        this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" });
        this.state.contact === "" ? this.setState({ contactRequired: "dispBlock" }) : this.setState({ contactRequired: "dispNone" });
        this.state.regpassword === "" ? this.setState({ regpasswordRequired: "dispBlock" }) : this.setState({ regpasswordRequired: "dispNone" });

    }
    bookShowHandler = () => {
        ReactDOM.render(<BookShow />, document.getElementById('root'));
    }
    render() {
        return (
            <div>
                <header className="header-container">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="btn-login">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                    {this.props.showBookShowButton === 'true' ?
                        <div className="btn-bookShow"><Button variant="contained" color="primary" onClick={this.bookShowHandler}>Book Show</Button></div> : ""
                    }
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen}
                    contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler} className="tab-margin">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username" >Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span>
                                </FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="password" >Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span>
                                </FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                        </TabContainer>
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}></Input>
                                <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}></Input>
                                <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" email={this.state.email} onChange={this.inputEmailChangeHandler}></Input>
                                <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="regpassword">Password</InputLabel>
                                <Input id="regpassword" type="password" regpassword={this.state.regpassword} onChange={this.inputRegpasswordChangeHandler}
                                ></Input>
                                <FormHelperText className={this.state.regpasswordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="contact">Contact No</InputLabel>
                                <Input id="contact" type="number" contact={this.state.contact} onChange={this.inputContactChangeHandler}></Input>
                                <FormHelperText className={this.state.contactRequired}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}
export default Header; 