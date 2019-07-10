import React, {Component} from 'react';
import Top from './Components/Top';
import Nav from './Components/Nav';
import Products from './Components/Product';
import Header from './Components/Header';
import Data from './Data/products.json'
import './App.css';

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
      <ul id="product-container">
      {
            Data.items.filter((x) =>
              x.title.toLowerCase().includes(this.state.filterString.toLowerCase())
            ).map(x => <Products Data={x}/>)
      }
      </ul>
    </div>
    );
  }}
  
  export default App;
