import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Catalog extends Component {
    // state = {  }
    render() {
        return (
            <div id='col'>
                <div id="catalog">
                    <h6>Bracelets</h6>
                    <ul>
                        <li><a href='#'><FontAwesomeIcon icon={['fa','caret-right']} size='lg' className='icons'/> Bracelets</a></li>
                        <li><a href='#'><FontAwesomeIcon icon={['fa','caret-right']} size='lg' className='icons'/> Rings</a></li>
                        <li><a href='#'><FontAwesomeIcon icon={['fa','caret-right']} size='lg' className='icons'/> Gloves</a></li>
                        <li><a href='#'><FontAwesomeIcon icon={['fa','caret-right']} size='lg' className='icons'/> Sets</a></li>
                        <li><a href='#'><FontAwesomeIcon icon={['fa','caret-right']} size='lg' className='icons'/> Necklaces</a></li>
                    </ul>
                </div>
                <div id="color">
                    <h6>▼ Color</h6>
                    <ul>
                        <li>
                            <a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Red</span>
                            </a>
                        </li>
                        <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Blue</span>
                            </a></li>
                        <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Green</span>
                            </a></li>
                        <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Cyan</span>
                            </a></li>
                        <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            <li><a href='#'>
                            <input type="checkbox" name="" id=""/>
                            <span>Orange</span>
                            </a></li>
                            
                    </ul>
                </div>
                <div id="size">
                    <h6>▼ Size</h6>
                    <ul>
                        <li>
                            <a href='#'>
                                <button>
                                    11
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    2XS
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    38-42
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    42-46
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    43-46
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    M/L
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    OS
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <button>
                                    S/M
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Catalog;