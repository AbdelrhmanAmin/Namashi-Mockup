import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    // state = {  }
    render() {
        return (
            <header>
                <ul id="breadcrumb">
                    <li>
                        <a href='#'>Home</a>
                        <span>/&nbsp;</span>
                    </li>
                    <li>
                        <a href='#'>Men</a>
                        <span>/&nbsp;</span>
                    </li>
                    <li>
                        <a href='#'>Accessory</a>
                        <span>/&nbsp; </span>
                    </li>
                    <li>
                        <a href='#'>Jewellery</a>
                        <span>/&nbsp;</span>
                    </li>
                    <li>
                        <a href='#'>Bracelets</a>
                    </li>
                </ul>
                <div id="txt-h">
                    <h3>MEN'S BRACELETS 2019</h3>
                </div>
                <ul id='breadcrumb'>
                    <li>
                        <a href="#">◀ Back To Jewellery</a>
                    </li>
                    <li>
                        <h5>### Styles</h5>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;