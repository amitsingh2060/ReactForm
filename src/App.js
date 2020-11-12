import React, { Component } from 'react';
import AddUser from './components/AddUser'
import './App.css';
import ViewUser from './components/ViewUser';
import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header headername={"Amit Singh"} />
        <AddUser />
        <ViewUser />
        <Footer />

      </div>
    );
  }
}

export default App;