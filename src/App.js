import React, {Component} from 'react';
import Top from './Components/Top';
import Nav from './Components/Nav';
import Products from './Components/Product';
import Header from './Components/Header';
import Catalog from './Components/Catalog';
import Data from './Data/products.json'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab,far,fas)

class App extends Component {
  state = {
    filterString: ''
}
render(){
  return (
      <div className="App">
      <Top onTextChange={text => {
              this.setState({filterString: text})
          }}/>
      <Nav />
      <Header />
      <div id='main-content'>
        <Catalog />
        <ul id="product-container">
        {
              Data.items.filter((x) =>
                x.title.toLowerCase().includes(this.state.filterString.toLowerCase())
              ).map(x => <Products Data={x}/>)
        }
        </ul>
      </div>
    </div>
    );
  }}
  
  export default App;
