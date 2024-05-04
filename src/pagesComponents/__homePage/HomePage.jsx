import React from 'react';

import Card from './__card/Card';
import Main from './__main/Main';
import Footer from '../../components/__footer/Footer';
import Wrapper from './__wrapper/Wrapper';
import Navbar from '../../components/__navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main></Main>
      <Card></Card>
      <Wrapper></Wrapper>
      <Footer></Footer>
    </div>
  );
};

export default Home;
