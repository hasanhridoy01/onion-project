import React from 'react';
import { useParams } from 'react-router-dom';
import img from '../../images/dinner5.png';
import './DetailsPage.css';

const DetailsPage = () => {
  const {productId} = useParams();
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-2"></div>
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5 w-25">
          <h1 className='mt-5'>Light Breakfast: {productId}</h1>
          <p className='mb-3 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nostrum reiciendis repudiandae quidem ratione quam commodi porro labore! Ratione, atque.</p>
          <button className='btn btn-danger'>Add</button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img className='details-img' src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;