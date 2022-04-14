import React, { useEffect, useState } from 'react';
import './Breakfast.css';

const Breakfast = () => {
  const [breakfasts, setBreakfasts] = useState([]);
  useEffect(() => {
    fetch('Breakfast.json')
      .then(response => response.json())
      .then(data => setBreakfasts(data));
  }, []);
  return (
    <div className='container mt-5'>
      <div className="row">
        {
          breakfasts.map(breakfast => Nasta(breakfast))
        }
      </div>
    </div>
  );
};
const Nasta = breakfast => {
  const { name, price, description, img } = breakfast;
  return (
    <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
      <a href="" className='link'>
        <div className="card w-75 mx-auto border-0">
          <img src={img} alt="" />
          <div className="card-body">
            <h6>{name}</h6>
            <p className='description'>{description}</p>
            <h5 className='price'>$ {price}</h5>
          </div>
        </div>
      </a>
    </div>
  );
}
export default Breakfast;