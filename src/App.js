import React from 'react'
import './App.scss'
import Header from './components/Header'
import About from './components/About'
import Archive from './components/Archive'
import Footer from './components/Footer'

/**
 * Controls main viewport of webapp
 */
class App extends React.Component {
  render() {
    return (  
      <div className="App">
        {/* Renders header */}
        <Header />
        {/* Renders about section */}
        <About />
        {/* Renders archive items */}
        <Archive />
        {/* Renders footer w/ contact section */}
        <Footer />
      </div>
  );
}
}

export default App;
