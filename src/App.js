import React, { Component} from 'react'
import Stepper from './Stepper'
import './App.css';
import SwitchView from './SwitchView';
import BookBarn from './BookBarn';
import Footer from './Footer';
import Header from './Header';

class App extends Component{
  constructor(){
    super();

    this.state = {
      books: []
    
    }
  }
 
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(results =>{

      this.setState({
        books: results
      })

    })
  }
 
  render() {

    return (
      <div>
        <Header />
        <BookBarn books = {this.state.books} />
        {/* <Stepper /> */}
        {/* <SwitchView /> */}
        <Footer />
      </div>
    )
  }
}

export default App;
