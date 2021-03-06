import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//imports pages for routes
import List from '../List/List'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'

class App extends Component {
  // Renders the entire app on the DOM

  //launches on page load and fires off functions
  componentDidMount() {
    this.getMovies();
  }

  //sends dispatch to index.js to get movies from database
  getMovies = () => {
    this.props.dispatch({
      type: 'GET_MOVIES'
    })
    console.log('Get Movies');
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <h1>Welcome to a Movie Database!</h1>
        </section>
        <div className="wrapper">
        <Router>
        <Route exact path="/" component={List} />
        <Route path="/Details" component={Details} />
        <Route path="/Edit" component={Edit} />
        </Router>
        </div>
      </div>
    );
  }
}

export default connect()(App);
