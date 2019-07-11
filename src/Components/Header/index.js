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
                    <p>مش كفاية كده ياشباب ؟</p>
                    <p>أنا شايف التصميم حلو اوي كده :D</p>
                </div>
                <ul id='breadcrumb'>
                    <li id='special'>
                        <a href="#"><i class="fa fa-caret-left fa-2x"></i> Back To Jewellery</a>
                    </li>
                    <li>
                        <p>### styles</p>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;