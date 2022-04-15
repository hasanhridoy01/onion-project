import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css';

const Breakfast = () => {
  const [breakfasts, setBreakfasts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('Breakfast.json')
      .then(response => response.json())
      .then(data => setBreakfasts(data));
  }, []);
  return (
    <div className='container mt-5 mx-auto'>
      <div className="row">
        {
          breakfasts.map(breakfast => Nasta(breakfast, navigate))
        }
      </div>
    </div>
  );
};
const Nasta = (breakfast, navigate) => {
  const { id, name, price, description, img } = breakfast;
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
export default Breakfast;