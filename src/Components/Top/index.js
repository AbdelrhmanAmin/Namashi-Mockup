import React, { Component } from 'react';
import './style.css';

class Top extends Component {
    // state = {  }
    render() {
        return (
            <div id='Top-con'>
                <ul id="Top-left">
                    <li><h1 id='Logo'>نمشي</h1></li>
                    <li><h5>Women</h5></li>
                    <li><h5>Men</h5></li>
                    <li><h5>Kids</h5></li>
                </ul>
                <ul id="Top-right">
                    <li><input type='text' placeholder="What are you looking for? " onKeyUp={e => this.props.onTextChange(e.target.value)}/></li>
                    <li><i className="fa fa-heart"></i></li>
                    <li><i className="fa fa-user"></i></li>
                    <li><i className="fa fa-shopping-bag"></i></li>
                </ul>
            </div>
        );
    }
}

export default Top;