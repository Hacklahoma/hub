import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Archive from './components/Archive';
import Footer from './components/Footer';

const StyledApp = styled.div`
    text-align: center;
`;

/**
 * Controls main viewport of webapp
 */
function App() {
    app.get('/apply', (req, res) => {
        res.redirect(302, 'https://forms.gle/c17PbYcmw9NbkddLA/'); // redirect from hacklahoma.org/apply to below link
    });

  return (
    <StyledApp>
      {/* Renders header */}
      <Header />
      {/* Renders about section */}
      <About />
      {/* Renders archive items */}
      <Archive />
      {/* Renders footer w/ contact section */}
      <Footer />
    </StyledApp>
  );
}

export default App;
