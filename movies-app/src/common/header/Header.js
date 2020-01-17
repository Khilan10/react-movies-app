import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
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