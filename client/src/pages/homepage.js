import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Header from '../components/header'; 
import HomepageCarousel from '../components/homepageCarousel';


function Homepage() {
    return (
      <div>
      <Header />
      <HomepageCarousel /> 
      </div>
  
    );
  }
  
  export default Homepage;