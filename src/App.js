import React from 'react'
import './App.scss'
import Header from './components/Header'
import About from './components/About'
import Archive from './components/Archive'
import Footer from './components/Footer'
import Loading from './components/Loading'

/**
 * Controls main viewport of webapp
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true // Sets default state to display loading screen
    }
  }

  // Component mounted, remove loading screen
  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  
  render() {
    if(this.state.loading)
      return (<Loading />);
    else
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
