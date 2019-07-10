import React, { Component } from 'react';
import './style.css';
class Catalog extends Component {
    // state = {  }
    render() {
        return (
            <div id='col'>
                <div id="catalog">
                    <h6>Bracelets</h6>
                    <ul>
                        <li><a href='#'>▶ Bracelets</a></li>
                        <li><a href='#'>▶ Rings</a></li>
                        <li><a href='#'>▶ Gloves</a></li>
                        <li><a href='#'>▶ Sets</a></li>
                        <li><a href='#'>▶ Necklaces</a></li>
                    </ul>
                </div> 
            </div>
        );
    }
}

export default Catalog;