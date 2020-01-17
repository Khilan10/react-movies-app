import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="btn-login">
                        <Button variant="contained" color="default">
                            Login
                </Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header; 