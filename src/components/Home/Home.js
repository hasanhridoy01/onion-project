import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import './Home.css';
import Lunch from './Lunch/Lunch';

const Home = () => {
  return (
    <div className='container mt-5 mb-5'>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-2">
        <Tab eventKey="home" title="Breakfast">
          <Breakfast></Breakfast>
        </Tab>
        <Tab eventKey="profile" title="Lunch">
          <Lunch></Lunch>
        </Tab>
        <Tab eventKey="contact" title="Dinner">
          <Dinner></Dinner>
        </Tab>
      </Tabs>
      {/* <div className="items">
        <a onClick={BreakfastTabs} href="">Breakfast</a>
        <a href="">Lunch</a>
        <a href="">Dinner</a>
      </div> */}
    </div>
  );
};

export default Home;