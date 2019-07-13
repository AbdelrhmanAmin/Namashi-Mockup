import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Top extends Component {
    state = {  
        scroll: '',
        on1: false,
        on2: false,
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
    toggler1 =  () => {
        this.setState(prevState => ({
            on1: !prevState.on1
          }));
    }
    toggler2 =  () => {
        this.setState(prevState => ({
            on2: !prevState.on2
          }));
    }
    render() {
        let iconer1 = this.state.on1 ? (<FontAwesomeIcon icon={['fas','heart']} size='lg'/>) : (<FontAwesomeIcon icon={['far','heart']} size='lg'/>);
        let iconer2 = this.state.on2 ? (<FontAwesomeIcon icon={['fas','user']} size='lg'/>): (<FontAwesomeIcon icon={['far','user']} size='lg'/>);
        return (
            <nav id='Top-con' className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
                <ul id="Top-left">
                    <li><h1 id='Logo'>نمشي</h1></li>
                    <li><h5>Women</h5></li>
                    <li id='selected'><h5>Men</h5></li>
                    <li><h5>Kids</h5></li>
                </ul>
                <ul id="Top-right">
                    <li><input type='text' placeholder="What are you looking for? " onKeyUp={e => this.props.onTextChange(e.target.value)}/></li>   
                    <li onClick={this.toggler1}> {iconer1}</li>
                    <li onClick={this.toggler2}> {iconer2}</li>
                    <li> <FontAwesomeIcon icon={['fas','cart-arrow-down']} size='lg'/></li>
                </ul>
            </nav>
        );
    }
}

export default Top;