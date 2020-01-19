import React, { Component } from 'react';
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
            value: 0
        }
    }
    openModalHandler = () => {
        this.setState({ modalIsOpen: true });
    }
    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });
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
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen}
                    contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler} className="tab-margin">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required style={{ magin: '20px' }}>
                                <InputLabel htmlFor="username" >Username</InputLabel>
                                <Input id="username" type="text" />
                            </FormControl><br />
                            <FormControl required>
                                <InputLabel htmlFor="password" >Password</InputLabel>
                                <Input id="password" type="password" />
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary">Login</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}
export default Header; 