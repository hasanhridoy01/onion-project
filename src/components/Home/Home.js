import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Breakfast from './Breakfast/Breakfast';
import './Home.css';

const Home = () => {
  return (
    <div className='container mt-5 mb-5'>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-2">
        <Tab eventKey="home" title="Breakfast">
          <Breakfast></Breakfast>
        </Tab>
        <Tab eventKey="profile" title="Lunch">
        <h3 className='mt-4'>Lunch</h3>
        </Tab>
        <Tab eventKey="contact" title="Dinner">
        <h3 className='mt-4'>Dinner</h3>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;