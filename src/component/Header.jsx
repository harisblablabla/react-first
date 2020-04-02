import React, {Component} from 'react';
import '../style/Header.css'


class Header extends Component {
    render(){

        return(
            <div className="header">
                <h1> INI Header!!!</h1>
                <ul>
                    <li>home</li>
                    <li>message</li>
                    <li>sign out</li>
                </ul>
            </div>
        )
    }
}

export default Header;