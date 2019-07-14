import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                        <a href='#'>Accessories</a>
                        <span>/&nbsp; </span>
                    </li>
                    <li>
                        <a href='#'>Jewellery</a>
                        <span>/&nbsp;</span>
                    </li>
                    <li>
                        <a className='selected' href='#'>Bracelets</a>
                    </li>
                </ul>
                <div id="txt-h">
                    <h4>MEN'S BRACELETS 2019</h4>
                </div>
                <ul id='breadcrumb'>
                    <li id='special'>
                        <a href="#"><FontAwesomeIcon icon={['fa','caret-left']} size='lg' className='icons'/> Back To Jewellery</a>
                    </li>
                    <li>
                        <p>348 styles</p>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;