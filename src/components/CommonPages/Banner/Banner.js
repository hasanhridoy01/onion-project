import React from 'react';
import { Button, Carousel, FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../../images/bannerbackground.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='carousel-title'>Best Food Waiting for your belly</h1>
            <InputGroup className="mb-3 w-50 search">
              <FormControl className='input-field'
                placeholder="Search Food Items"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className='search-btn' variant="danger" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;