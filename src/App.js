import { Brand, CallToAction, NavBar } from './components';
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
