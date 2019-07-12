import React, { Component } from 'react';
import './style.css';

class Top extends Component {
    state = {  
        scroll: ''
    }
    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    }
    componentDidMount = () => {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    componentDidUpdate = () => {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
    render() {
        return (
            <nav id='Top-con' className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
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
            </nav>
        );
    }
}

export default Top;