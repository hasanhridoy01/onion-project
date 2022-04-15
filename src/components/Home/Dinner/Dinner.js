import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dinner = () => {
  const [dinners, setDinner] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('dinner.json')
    .then(response => response.json())
    .then(data => setDinner(data));
  },[]);
  return (
    <div className='container mt-5'>
      <div className="row">
        {
          dinners.map(dinner => rate(dinner, navigate))
        }
      </div>
    </div>
  );
};
const rate = (dinner, navigate) => {
  const { id, name, price, description, img } = dinner;
  const navigateToDetailsPage = (id) => {
    navigate(`/product/${id}`);
  }
  return (
    <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
        <div onClick={() => navigateToDetailsPage(id)} className="card w-75 mx-auto border-0">
          <img src={img} alt="" />
          <div className="card-body">
            <h6>{name}</h6>
            <p className='description'>{description}</p>
            <h5 className='price'>$ {price}</h5>
          </div>
        </div>
    </div>
  );
}
export default Dinner;